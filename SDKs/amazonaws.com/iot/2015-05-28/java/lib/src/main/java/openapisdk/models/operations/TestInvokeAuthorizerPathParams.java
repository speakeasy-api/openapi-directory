package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestInvokeAuthorizerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorizerName")
    public String authorizerName;
    public TestInvokeAuthorizerPathParams withAuthorizerName(String authorizerName) {
        this.authorizerName = authorizerName;
        return this;
    }
}