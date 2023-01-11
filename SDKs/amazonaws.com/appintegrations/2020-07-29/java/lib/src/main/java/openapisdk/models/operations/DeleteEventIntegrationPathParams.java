package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEventIntegrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Name")
    public String name;
    public DeleteEventIntegrationPathParams withName(String name) {
        this.name = name;
        return this;
    }
}