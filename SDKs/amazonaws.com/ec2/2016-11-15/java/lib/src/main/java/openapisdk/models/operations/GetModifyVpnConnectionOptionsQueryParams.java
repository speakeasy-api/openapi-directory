package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyVpnConnectionOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyVpnConnectionOptionsActionEnum action;
    public GetModifyVpnConnectionOptionsQueryParams withAction(GetModifyVpnConnectionOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyVpnConnectionOptionsQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LocalIpv4NetworkCidr")
    public String localIpv4NetworkCidr;
    public GetModifyVpnConnectionOptionsQueryParams withLocalIpv4NetworkCidr(String localIpv4NetworkCidr) {
        this.localIpv4NetworkCidr = localIpv4NetworkCidr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LocalIpv6NetworkCidr")
    public String localIpv6NetworkCidr;
    public GetModifyVpnConnectionOptionsQueryParams withLocalIpv6NetworkCidr(String localIpv6NetworkCidr) {
        this.localIpv6NetworkCidr = localIpv6NetworkCidr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RemoteIpv4NetworkCidr")
    public String remoteIpv4NetworkCidr;
    public GetModifyVpnConnectionOptionsQueryParams withRemoteIpv4NetworkCidr(String remoteIpv4NetworkCidr) {
        this.remoteIpv4NetworkCidr = remoteIpv4NetworkCidr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RemoteIpv6NetworkCidr")
    public String remoteIpv6NetworkCidr;
    public GetModifyVpnConnectionOptionsQueryParams withRemoteIpv6NetworkCidr(String remoteIpv6NetworkCidr) {
        this.remoteIpv6NetworkCidr = remoteIpv6NetworkCidr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyVpnConnectionOptionsVersionEnum version;
    public GetModifyVpnConnectionOptionsQueryParams withVersion(GetModifyVpnConnectionOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpnConnectionId")
    public String vpnConnectionId;
    public GetModifyVpnConnectionOptionsQueryParams withVpnConnectionId(String vpnConnectionId) {
        this.vpnConnectionId = vpnConnectionId;
        return this;
    }
}