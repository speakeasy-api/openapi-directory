package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetachVpnGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDetachVpnGatewayActionEnum action;
    public GetDetachVpnGatewayQueryParams withAction(GetDetachVpnGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDetachVpnGatewayQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDetachVpnGatewayVersionEnum version;
    public GetDetachVpnGatewayQueryParams withVersion(GetDetachVpnGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetDetachVpnGatewayQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpnGatewayId")
    public String vpnGatewayId;
    public GetDetachVpnGatewayQueryParams withVpnGatewayId(String vpnGatewayId) {
        this.vpnGatewayId = vpnGatewayId;
        return this;
    }
}