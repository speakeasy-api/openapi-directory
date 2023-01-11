package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTransitGatewayPrefixListReferenceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyTransitGatewayPrefixListReferenceActionEnum action;
    public PostModifyTransitGatewayPrefixListReferenceQueryParams withAction(PostModifyTransitGatewayPrefixListReferenceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyTransitGatewayPrefixListReferenceVersionEnum version;
    public PostModifyTransitGatewayPrefixListReferenceQueryParams withVersion(PostModifyTransitGatewayPrefixListReferenceVersionEnum version) {
        this.version = version;
        return this;
    }
}