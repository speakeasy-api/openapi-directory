package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeClientVpnIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAuthorizeClientVpnIngressActionEnum action;
    public PostAuthorizeClientVpnIngressQueryParams withAction(PostAuthorizeClientVpnIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAuthorizeClientVpnIngressVersionEnum version;
    public PostAuthorizeClientVpnIngressQueryParams withVersion(PostAuthorizeClientVpnIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}