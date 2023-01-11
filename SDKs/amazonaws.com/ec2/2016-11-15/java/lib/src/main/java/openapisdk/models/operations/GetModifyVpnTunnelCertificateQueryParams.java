package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyVpnTunnelCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyVpnTunnelCertificateActionEnum action;
    public GetModifyVpnTunnelCertificateQueryParams withAction(GetModifyVpnTunnelCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyVpnTunnelCertificateQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyVpnTunnelCertificateVersionEnum version;
    public GetModifyVpnTunnelCertificateQueryParams withVersion(GetModifyVpnTunnelCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpnConnectionId")
    public String vpnConnectionId;
    public GetModifyVpnTunnelCertificateQueryParams withVpnConnectionId(String vpnConnectionId) {
        this.vpnConnectionId = vpnConnectionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpnTunnelOutsideIpAddress")
    public String vpnTunnelOutsideIpAddress;
    public GetModifyVpnTunnelCertificateQueryParams withVpnTunnelOutsideIpAddress(String vpnTunnelOutsideIpAddress) {
        this.vpnTunnelOutsideIpAddress = vpnTunnelOutsideIpAddress;
        return this;
    }
}