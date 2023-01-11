package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeSecurityGroupEgressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAuthorizeSecurityGroupEgressActionEnum action;
    public PostAuthorizeSecurityGroupEgressQueryParams withAction(PostAuthorizeSecurityGroupEgressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAuthorizeSecurityGroupEgressVersionEnum version;
    public PostAuthorizeSecurityGroupEgressQueryParams withVersion(PostAuthorizeSecurityGroupEgressVersionEnum version) {
        this.version = version;
        return this;
    }
}