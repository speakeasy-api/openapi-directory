package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeIdentityUsagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityId")
    public String identityId;
    public DescribeIdentityUsagePathParams withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public DescribeIdentityUsagePathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}