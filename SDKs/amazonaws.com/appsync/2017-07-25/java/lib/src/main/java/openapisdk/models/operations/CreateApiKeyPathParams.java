package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public CreateApiKeyPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}