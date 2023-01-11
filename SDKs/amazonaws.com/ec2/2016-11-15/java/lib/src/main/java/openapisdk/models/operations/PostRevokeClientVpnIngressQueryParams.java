package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeClientVpnIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRevokeClientVpnIngressActionEnum action;
    public PostRevokeClientVpnIngressQueryParams withAction(PostRevokeClientVpnIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRevokeClientVpnIngressVersionEnum version;
    public PostRevokeClientVpnIngressQueryParams withVersion(PostRevokeClientVpnIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}