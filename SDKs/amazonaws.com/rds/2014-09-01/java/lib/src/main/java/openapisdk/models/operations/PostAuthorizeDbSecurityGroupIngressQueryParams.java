package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeDbSecurityGroupIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAuthorizeDbSecurityGroupIngressActionEnum action;
    public PostAuthorizeDbSecurityGroupIngressQueryParams withAction(PostAuthorizeDbSecurityGroupIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAuthorizeDbSecurityGroupIngressVersionEnum version;
    public PostAuthorizeDbSecurityGroupIngressQueryParams withVersion(PostAuthorizeDbSecurityGroupIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}