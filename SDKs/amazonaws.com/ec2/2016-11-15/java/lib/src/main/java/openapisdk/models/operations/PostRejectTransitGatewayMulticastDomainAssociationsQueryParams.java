package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectTransitGatewayMulticastDomainAssociationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRejectTransitGatewayMulticastDomainAssociationsActionEnum action;
    public PostRejectTransitGatewayMulticastDomainAssociationsQueryParams withAction(PostRejectTransitGatewayMulticastDomainAssociationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRejectTransitGatewayMulticastDomainAssociationsVersionEnum version;
    public PostRejectTransitGatewayMulticastDomainAssociationsQueryParams withVersion(PostRejectTransitGatewayMulticastDomainAssociationsVersionEnum version) {
        this.version = version;
        return this;
    }
}