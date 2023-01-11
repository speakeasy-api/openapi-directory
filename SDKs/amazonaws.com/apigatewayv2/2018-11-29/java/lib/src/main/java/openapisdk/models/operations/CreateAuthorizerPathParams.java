package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAuthorizerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public CreateAuthorizerPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}