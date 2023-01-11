package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateTransitGatewayPrefixListReferenceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateTransitGatewayPrefixListReferenceActionEnum action;
    public GetCreateTransitGatewayPrefixListReferenceQueryParams withAction(GetCreateTransitGatewayPrefixListReferenceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Blackhole")
    public Boolean blackhole;
    public GetCreateTransitGatewayPrefixListReferenceQueryParams withBlackhole(Boolean blackhole) {
        this.blackhole = blackhole;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCreateTransitGatewayPrefixListReferenceQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PrefixListId")
    public String prefixListId;
    public GetCreateTransitGatewayPrefixListReferenceQueryParams withPrefixListId(String prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayAttachmentId")
    public String transitGatewayAttachmentId;
    public GetCreateTransitGatewayPrefixListReferenceQueryParams withTransitGatewayAttachmentId(String transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayRouteTableId")
    public String transitGatewayRouteTableId;
    public GetCreateTransitGatewayPrefixListReferenceQueryParams withTransitGatewayRouteTableId(String transitGatewayRouteTableId) {
        this.transitGatewayRouteTableId = transitGatewayRouteTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateTransitGatewayPrefixListReferenceVersionEnum version;
    public GetCreateTransitGatewayPrefixListReferenceQueryParams withVersion(GetCreateTransitGatewayPrefixListReferenceVersionEnum version) {
        this.version = version;
        return this;
    }
}