package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteNatGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteNatGatewayActionEnum action;
    public GetDeleteNatGatewayQueryParams withAction(GetDeleteNatGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteNatGatewayQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NatGatewayId")
    public String natGatewayId;
    public GetDeleteNatGatewayQueryParams withNatGatewayId(String natGatewayId) {
        this.natGatewayId = natGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteNatGatewayVersionEnum version;
    public GetDeleteNatGatewayQueryParams withVersion(GetDeleteNatGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}