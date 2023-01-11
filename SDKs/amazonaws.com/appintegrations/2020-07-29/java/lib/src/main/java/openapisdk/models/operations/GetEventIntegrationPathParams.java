package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventIntegrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Name")
    public String name;
    public GetEventIntegrationPathParams withName(String name) {
        this.name = name;
        return this;
    }
}