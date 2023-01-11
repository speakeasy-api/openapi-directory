package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpnTunnelCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyVpnTunnelCertificateActionEnum action;
    public PostModifyVpnTunnelCertificateQueryParams withAction(PostModifyVpnTunnelCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyVpnTunnelCertificateVersionEnum version;
    public PostModifyVpnTunnelCertificateQueryParams withVersion(PostModifyVpnTunnelCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}