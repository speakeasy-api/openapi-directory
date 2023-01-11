package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisableVgwRoutePropagationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisableVgwRoutePropagationActionEnum action;
    public GetDisableVgwRoutePropagationQueryParams withAction(GetDisableVgwRoutePropagationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDisableVgwRoutePropagationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GatewayId")
    public String gatewayId;
    public GetDisableVgwRoutePropagationQueryParams withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RouteTableId")
    public String routeTableId;
    public GetDisableVgwRoutePropagationQueryParams withRouteTableId(String routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisableVgwRoutePropagationVersionEnum version;
    public GetDisableVgwRoutePropagationQueryParams withVersion(GetDisableVgwRoutePropagationVersionEnum version) {
        this.version = version;
        return this;
    }
}