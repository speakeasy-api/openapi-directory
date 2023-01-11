package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayPeeringAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTransitGatewayPeeringAttachmentActionEnum action;
    public PostDeleteTransitGatewayPeeringAttachmentQueryParams withAction(PostDeleteTransitGatewayPeeringAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTransitGatewayPeeringAttachmentVersionEnum version;
    public PostDeleteTransitGatewayPeeringAttachmentQueryParams withVersion(PostDeleteTransitGatewayPeeringAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}