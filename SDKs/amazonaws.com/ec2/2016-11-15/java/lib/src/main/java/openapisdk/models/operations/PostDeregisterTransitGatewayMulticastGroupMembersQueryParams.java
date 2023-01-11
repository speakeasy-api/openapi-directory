package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterTransitGatewayMulticastGroupMembersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeregisterTransitGatewayMulticastGroupMembersActionEnum action;
    public PostDeregisterTransitGatewayMulticastGroupMembersQueryParams withAction(PostDeregisterTransitGatewayMulticastGroupMembersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeregisterTransitGatewayMulticastGroupMembersVersionEnum version;
    public PostDeregisterTransitGatewayMulticastGroupMembersQueryParams withVersion(PostDeregisterTransitGatewayMulticastGroupMembersVersionEnum version) {
        this.version = version;
        return this;
    }
}