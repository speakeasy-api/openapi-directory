package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEventIntegrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Name")
    public String name;
    public UpdateEventIntegrationPathParams withName(String name) {
        this.name = name;
        return this;
    }
}