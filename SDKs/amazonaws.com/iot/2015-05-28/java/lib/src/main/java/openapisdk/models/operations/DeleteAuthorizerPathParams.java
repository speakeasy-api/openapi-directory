package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAuthorizerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorizerName")
    public String authorizerName;
    public DeleteAuthorizerPathParams withAuthorizerName(String authorizerName) {
        this.authorizerName = authorizerName;
        return this;
    }
}