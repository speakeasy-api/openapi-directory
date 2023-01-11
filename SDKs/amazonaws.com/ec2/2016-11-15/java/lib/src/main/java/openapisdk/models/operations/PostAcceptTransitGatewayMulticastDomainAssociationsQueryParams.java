package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptTransitGatewayMulticastDomainAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAcceptTransitGatewayMulticastDomainAssociationsActionEnum action;
    public PostAcceptTransitGatewayMulticastDomainAssociationsQueryParams withAction(PostAcceptTransitGatewayMulticastDomainAssociationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAcceptTransitGatewayMulticastDomainAssociationsVersionEnum version;
    public PostAcceptTransitGatewayMulticastDomainAssociationsQueryParams withVersion(PostAcceptTransitGatewayMulticastDomainAssociationsVersionEnum version) {
        this.version = version;
        return this;
    }
}