package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteCarrierGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteCarrierGatewayActionEnum action;
    public GetDeleteCarrierGatewayQueryParams withAction(GetDeleteCarrierGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CarrierGatewayId")
    public String carrierGatewayId;
    public GetDeleteCarrierGatewayQueryParams withCarrierGatewayId(String carrierGatewayId) {
        this.carrierGatewayId = carrierGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteCarrierGatewayQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteCarrierGatewayVersionEnum version;
    public GetDeleteCarrierGatewayQueryParams withVersion(GetDeleteCarrierGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}