package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterTransitGatewayMulticastGroupSourcesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeregisterTransitGatewayMulticastGroupSourcesActionEnum action;
    public PostDeregisterTransitGatewayMulticastGroupSourcesQueryParams withAction(PostDeregisterTransitGatewayMulticastGroupSourcesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeregisterTransitGatewayMulticastGroupSourcesVersionEnum version;
    public PostDeregisterTransitGatewayMulticastGroupSourcesQueryParams withVersion(PostDeregisterTransitGatewayMulticastGroupSourcesVersionEnum version) {
        this.version = version;
        return this;
    }
}