package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIntegrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public CreateIntegrationPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}