package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableVgwRoutePropagationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableVgwRoutePropagationActionEnum action;
    public GetEnableVgwRoutePropagationQueryParams withAction(GetEnableVgwRoutePropagationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetEnableVgwRoutePropagationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GatewayId")
    public String gatewayId;
    public GetEnableVgwRoutePropagationQueryParams withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RouteTableId")
    public String routeTableId;
    public GetEnableVgwRoutePropagationQueryParams withRouteTableId(String routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableVgwRoutePropagationVersionEnum version;
    public GetEnableVgwRoutePropagationQueryParams withVersion(GetEnableVgwRoutePropagationVersionEnum version) {
        this.version = version;
        return this;
    }
}