package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayPrefixListReferenceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTransitGatewayPrefixListReferenceActionEnum action;
    public PostCreateTransitGatewayPrefixListReferenceQueryParams withAction(PostCreateTransitGatewayPrefixListReferenceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTransitGatewayPrefixListReferenceVersionEnum version;
    public PostCreateTransitGatewayPrefixListReferenceQueryParams withVersion(PostCreateTransitGatewayPrefixListReferenceVersionEnum version) {
        this.version = version;
        return this;
    }
}