package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssumeRoleWithWebIdentityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssumeRoleWithWebIdentityActionEnum action;
    public PostAssumeRoleWithWebIdentityQueryParams withAction(PostAssumeRoleWithWebIdentityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssumeRoleWithWebIdentityVersionEnum version;
    public PostAssumeRoleWithWebIdentityQueryParams withVersion(PostAssumeRoleWithWebIdentityVersionEnum version) {
        this.version = version;
        return this;
    }
}