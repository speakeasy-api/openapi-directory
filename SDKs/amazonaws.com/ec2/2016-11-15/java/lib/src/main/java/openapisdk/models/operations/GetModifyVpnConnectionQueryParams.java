package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyVpnConnectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyVpnConnectionActionEnum action;
    public GetModifyVpnConnectionQueryParams withAction(GetModifyVpnConnectionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CustomerGatewayId")
    public String customerGatewayId;
    public GetModifyVpnConnectionQueryParams withCustomerGatewayId(String customerGatewayId) {
        this.customerGatewayId = customerGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyVpnConnectionQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayId")
    public String transitGatewayId;
    public GetModifyVpnConnectionQueryParams withTransitGatewayId(String transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyVpnConnectionVersionEnum version;
    public GetModifyVpnConnectionQueryParams withVersion(GetModifyVpnConnectionVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpnConnectionId")
    public String vpnConnectionId;
    public GetModifyVpnConnectionQueryParams withVpnConnectionId(String vpnConnectionId) {
        this.vpnConnectionId = vpnConnectionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpnGatewayId")
    public String vpnGatewayId;
    public GetModifyVpnConnectionQueryParams withVpnGatewayId(String vpnGatewayId) {
        this.vpnGatewayId = vpnGatewayId;
        return this;
    }
}