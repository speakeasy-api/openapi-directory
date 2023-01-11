package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeCacheSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAuthorizeCacheSecurityGroupIngressActionEnum action;
    public PostAuthorizeCacheSecurityGroupIngressQueryParams withAction(PostAuthorizeCacheSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAuthorizeCacheSecurityGroupIngressVersionEnum version;
    public PostAuthorizeCacheSecurityGroupIngressQueryParams withVersion(PostAuthorizeCacheSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}