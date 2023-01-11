package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateTransitGatewayMulticastDomainQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateTransitGatewayMulticastDomainActionEnum action;
    public PostAssociateTransitGatewayMulticastDomainQueryParams withAction(PostAssociateTransitGatewayMulticastDomainActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateTransitGatewayMulticastDomainVersionEnum version;
    public PostAssociateTransitGatewayMulticastDomainQueryParams withVersion(PostAssociateTransitGatewayMulticastDomainVersionEnum version) {
        this.version = version;
        return this;
    }
}