package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorizerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetAuthorizerPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorizerId")
    public String authorizerId;
    public GetAuthorizerPathParams withAuthorizerId(String authorizerId) {
        this.authorizerId = authorizerId;
        return this;
    }
}