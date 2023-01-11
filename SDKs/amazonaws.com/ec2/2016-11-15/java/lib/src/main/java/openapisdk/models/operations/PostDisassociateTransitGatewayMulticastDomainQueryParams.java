package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateTransitGatewayMulticastDomainQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateTransitGatewayMulticastDomainActionEnum action;
    public PostDisassociateTransitGatewayMulticastDomainQueryParams withAction(PostDisassociateTransitGatewayMulticastDomainActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateTransitGatewayMulticastDomainVersionEnum version;
    public PostDisassociateTransitGatewayMulticastDomainQueryParams withVersion(PostDisassociateTransitGatewayMulticastDomainVersionEnum version) {
        this.version = version;
        return this;
    }
}