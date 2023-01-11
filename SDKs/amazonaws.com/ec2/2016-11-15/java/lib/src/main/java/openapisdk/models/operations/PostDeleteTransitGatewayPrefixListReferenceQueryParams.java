package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayPrefixListReferenceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTransitGatewayPrefixListReferenceActionEnum action;
    public PostDeleteTransitGatewayPrefixListReferenceQueryParams withAction(PostDeleteTransitGatewayPrefixListReferenceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTransitGatewayPrefixListReferenceVersionEnum version;
    public PostDeleteTransitGatewayPrefixListReferenceQueryParams withVersion(PostDeleteTransitGatewayPrefixListReferenceVersionEnum version) {
        this.version = version;
        return this;
    }
}