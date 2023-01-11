package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayMulticastDomainQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTransitGatewayMulticastDomainActionEnum action;
    public PostCreateTransitGatewayMulticastDomainQueryParams withAction(PostCreateTransitGatewayMulticastDomainActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTransitGatewayMulticastDomainVersionEnum version;
    public PostCreateTransitGatewayMulticastDomainQueryParams withVersion(PostCreateTransitGatewayMulticastDomainVersionEnum version) {
        this.version = version;
        return this;
    }
}