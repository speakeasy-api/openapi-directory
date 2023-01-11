package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteTransitGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteTransitGatewayActionEnum action;
    public GetDeleteTransitGatewayQueryParams withAction(GetDeleteTransitGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteTransitGatewayQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayId")
    public String transitGatewayId;
    public GetDeleteTransitGatewayQueryParams withTransitGatewayId(String transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteTransitGatewayVersionEnum version;
    public GetDeleteTransitGatewayQueryParams withVersion(GetDeleteTransitGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}