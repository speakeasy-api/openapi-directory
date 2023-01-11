package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAuthorizerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorizerName")
    public String authorizerName;
    public UpdateAuthorizerPathParams withAuthorizerName(String authorizerName) {
        this.authorizerName = authorizerName;
        return this;
    }
}