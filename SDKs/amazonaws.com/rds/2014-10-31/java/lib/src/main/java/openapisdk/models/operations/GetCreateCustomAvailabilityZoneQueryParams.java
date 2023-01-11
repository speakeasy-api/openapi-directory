package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateCustomAvailabilityZoneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateCustomAvailabilityZoneActionEnum action;
    public GetCreateCustomAvailabilityZoneQueryParams withAction(GetCreateCustomAvailabilityZoneActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CustomAvailabilityZoneName")
    public String customAvailabilityZoneName;
    public GetCreateCustomAvailabilityZoneQueryParams withCustomAvailabilityZoneName(String customAvailabilityZoneName) {
        this.customAvailabilityZoneName = customAvailabilityZoneName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExistingVpnId")
    public String existingVpnId;
    public GetCreateCustomAvailabilityZoneQueryParams withExistingVpnId(String existingVpnId) {
        this.existingVpnId = existingVpnId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NewVpnTunnelName")
    public String newVpnTunnelName;
    public GetCreateCustomAvailabilityZoneQueryParams withNewVpnTunnelName(String newVpnTunnelName) {
        this.newVpnTunnelName = newVpnTunnelName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateCustomAvailabilityZoneVersionEnum version;
    public GetCreateCustomAvailabilityZoneQueryParams withVersion(GetCreateCustomAvailabilityZoneVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpnTunnelOriginatorIP")
    public String vpnTunnelOriginatorIP;
    public GetCreateCustomAvailabilityZoneQueryParams withVpnTunnelOriginatorIp(String vpnTunnelOriginatorIP) {
        this.vpnTunnelOriginatorIP = vpnTunnelOriginatorIP;
        return this;
    }
}