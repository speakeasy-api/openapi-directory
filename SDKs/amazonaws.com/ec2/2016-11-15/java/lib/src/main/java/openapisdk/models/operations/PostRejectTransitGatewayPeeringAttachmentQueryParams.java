package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectTransitGatewayPeeringAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRejectTransitGatewayPeeringAttachmentActionEnum action;
    public PostRejectTransitGatewayPeeringAttachmentQueryParams withAction(PostRejectTransitGatewayPeeringAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRejectTransitGatewayPeeringAttachmentVersionEnum version;
    public PostRejectTransitGatewayPeeringAttachmentQueryParams withVersion(PostRejectTransitGatewayPeeringAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}