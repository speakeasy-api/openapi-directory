package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAuthorizerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorizerName")
    public String authorizerName;
    public DescribeAuthorizerPathParams withAuthorizerName(String authorizerName) {
        this.authorizerName = authorizerName;
        return this;
    }
}