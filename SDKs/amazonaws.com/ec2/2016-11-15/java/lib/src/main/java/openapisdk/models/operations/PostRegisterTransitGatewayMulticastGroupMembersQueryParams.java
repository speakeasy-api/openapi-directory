package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterTransitGatewayMulticastGroupMembersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRegisterTransitGatewayMulticastGroupMembersActionEnum action;
    public PostRegisterTransitGatewayMulticastGroupMembersQueryParams withAction(PostRegisterTransitGatewayMulticastGroupMembersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRegisterTransitGatewayMulticastGroupMembersVersionEnum version;
    public PostRegisterTransitGatewayMulticastGroupMembersQueryParams withVersion(PostRegisterTransitGatewayMulticastGroupMembersVersionEnum version) {
        this.version = version;
        return this;
    }
}