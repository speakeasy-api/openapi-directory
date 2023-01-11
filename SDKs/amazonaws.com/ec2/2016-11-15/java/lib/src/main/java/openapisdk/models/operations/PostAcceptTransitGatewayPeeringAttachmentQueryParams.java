package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptTransitGatewayPeeringAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAcceptTransitGatewayPeeringAttachmentActionEnum action;
    public PostAcceptTransitGatewayPeeringAttachmentQueryParams withAction(PostAcceptTransitGatewayPeeringAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAcceptTransitGatewayPeeringAttachmentVersionEnum version;
    public PostAcceptTransitGatewayPeeringAttachmentQueryParams withVersion(PostAcceptTransitGatewayPeeringAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}