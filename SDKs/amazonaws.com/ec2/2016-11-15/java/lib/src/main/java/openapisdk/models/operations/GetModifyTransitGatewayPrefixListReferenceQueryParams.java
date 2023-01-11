package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyTransitGatewayPrefixListReferenceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyTransitGatewayPrefixListReferenceActionEnum action;
    public GetModifyTransitGatewayPrefixListReferenceQueryParams withAction(GetModifyTransitGatewayPrefixListReferenceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Blackhole")
    public Boolean blackhole;
    public GetModifyTransitGatewayPrefixListReferenceQueryParams withBlackhole(Boolean blackhole) {
        this.blackhole = blackhole;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyTransitGatewayPrefixListReferenceQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PrefixListId")
    public String prefixListId;
    public GetModifyTransitGatewayPrefixListReferenceQueryParams withPrefixListId(String prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayAttachmentId")
    public String transitGatewayAttachmentId;
    public GetModifyTransitGatewayPrefixListReferenceQueryParams withTransitGatewayAttachmentId(String transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayRouteTableId")
    public String transitGatewayRouteTableId;
    public GetModifyTransitGatewayPrefixListReferenceQueryParams withTransitGatewayRouteTableId(String transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyTransitGatewayPrefixListReferenceVersionEnum version;
    public GetModifyTransitGatewayPrefixListReferenceQueryParams withVersion(GetModifyTransitGatewayPrefixListReferenceVersionEnum version) {
        this.version = version;
        return this;
    }
}