package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRevokeSecurityGroupIngressActionEnum action;
    public PostRevokeSecurityGroupIngressQueryParams withAction(PostRevokeSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRevokeSecurityGroupIngressVersionEnum version;
    public PostRevokeSecurityGroupIngressQueryParams withVersion(PostRevokeSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}