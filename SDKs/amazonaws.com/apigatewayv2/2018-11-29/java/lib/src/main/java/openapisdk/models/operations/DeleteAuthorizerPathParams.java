package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAuthorizerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteAuthorizerPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorizerId")
    public String authorizerId;
    public DeleteAuthorizerPathParams withAuthorizerId(String authorizerId) {
        this.authorizerId = authorizerId;
        return this;
    }
}