package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeClusterSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAuthorizeClusterSecurityGroupIngressActionEnum action;
    public PostAuthorizeClusterSecurityGroupIngressQueryParams withAction(PostAuthorizeClusterSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAuthorizeClusterSecurityGroupIngressVersionEnum version;
    public PostAuthorizeClusterSecurityGroupIngressQueryParams withVersion(PostAuthorizeClusterSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}