package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachVpnGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAttachVpnGatewayActionEnum action;
    public GetAttachVpnGatewayQueryParams withAction(GetAttachVpnGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAttachVpnGatewayQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAttachVpnGatewayVersionEnum version;
    public GetAttachVpnGatewayQueryParams withVersion(GetAttachVpnGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetAttachVpnGatewayQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpnGatewayId")
    public String vpnGatewayId;
    public GetAttachVpnGatewayQueryParams withVpnGatewayId(String vpnGatewayId) {
        this.vpnGatewayId = vpnGatewayId;
        return this;
    }
}