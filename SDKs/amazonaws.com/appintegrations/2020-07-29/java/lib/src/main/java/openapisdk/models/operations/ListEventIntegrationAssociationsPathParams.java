package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventIntegrationAssociationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Name")
    public String name;
    public ListEventIntegrationAssociationsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}