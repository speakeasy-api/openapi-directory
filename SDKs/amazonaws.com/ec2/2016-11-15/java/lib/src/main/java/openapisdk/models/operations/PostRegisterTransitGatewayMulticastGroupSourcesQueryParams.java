package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterTransitGatewayMulticastGroupSourcesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRegisterTransitGatewayMulticastGroupSourcesActionEnum action;
    public PostRegisterTransitGatewayMulticastGroupSourcesQueryParams withAction(PostRegisterTransitGatewayMulticastGroupSourcesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRegisterTransitGatewayMulticastGroupSourcesVersionEnum version;
    public PostRegisterTransitGatewayMulticastGroupSourcesQueryParams withVersion(PostRegisterTransitGatewayMulticastGroupSourcesVersionEnum version) {
        this.version = version;
        return this;
    }
}