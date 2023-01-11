package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeDbSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRevokeDbSecurityGroupIngressActionEnum action;
    public PostRevokeDbSecurityGroupIngressQueryParams withAction(PostRevokeDbSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRevokeDbSecurityGroupIngressVersionEnum version;
    public PostRevokeDbSecurityGroupIngressQueryParams withVersion(PostRevokeDbSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}