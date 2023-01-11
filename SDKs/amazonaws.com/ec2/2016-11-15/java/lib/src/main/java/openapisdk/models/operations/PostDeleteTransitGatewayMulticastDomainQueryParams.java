package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayMulticastDomainQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTransitGatewayMulticastDomainActionEnum action;
    public PostDeleteTransitGatewayMulticastDomainQueryParams withAction(PostDeleteTransitGatewayMulticastDomainActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTransitGatewayMulticastDomainVersionEnum version;
    public PostDeleteTransitGatewayMulticastDomainQueryParams withVersion(PostDeleteTransitGatewayMulticastDomainVersionEnum version) {
        this.version = version;
        return this;
    }
}