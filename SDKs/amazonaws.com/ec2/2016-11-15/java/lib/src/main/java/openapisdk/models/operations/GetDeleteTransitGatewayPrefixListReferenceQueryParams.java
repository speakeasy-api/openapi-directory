package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteTransitGatewayPrefixListReferenceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteTransitGatewayPrefixListReferenceActionEnum action;
    public GetDeleteTransitGatewayPrefixListReferenceQueryParams withAction(GetDeleteTransitGatewayPrefixListReferenceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteTransitGatewayPrefixListReferenceQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PrefixListId")
    public String prefixListId;
    public GetDeleteTransitGatewayPrefixListReferenceQueryParams withPrefixListId(String prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayRouteTableId")
    public String transitGatewayRouteTableId;
    public GetDeleteTransitGatewayPrefixListReferenceQueryParams withTransitGatewayRouteTableId(String transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteTransitGatewayPrefixListReferenceVersionEnum version;
    public GetDeleteTransitGatewayPrefixListReferenceQueryParams withVersion(GetDeleteTransitGatewayPrefixListReferenceVersionEnum version) {
        this.version = version;
        return this;
    }
}