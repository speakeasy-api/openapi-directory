package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeClusterSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRevokeClusterSecurityGroupIngressActionEnum action;
    public PostRevokeClusterSecurityGroupIngressQueryParams withAction(PostRevokeClusterSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRevokeClusterSecurityGroupIngressVersionEnum version;
    public PostRevokeClusterSecurityGroupIngressQueryParams withVersion(PostRevokeClusterSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}