package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAuthorizerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorizerName")
    public String authorizerName;
    public CreateAuthorizerPathParams withAuthorizerName(String authorizerName) {
        this.authorizerName = authorizerName;
        return this;
    }
}