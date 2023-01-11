package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAuthorizeSecurityGroupIngressActionEnum action;
    public PostAuthorizeSecurityGroupIngressQueryParams withAction(PostAuthorizeSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAuthorizeSecurityGroupIngressVersionEnum version;
    public PostAuthorizeSecurityGroupIngressQueryParams withVersion(PostAuthorizeSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}