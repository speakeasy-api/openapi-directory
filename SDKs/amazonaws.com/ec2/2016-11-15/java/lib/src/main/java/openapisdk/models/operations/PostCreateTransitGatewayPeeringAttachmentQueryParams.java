package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayPeeringAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTransitGatewayPeeringAttachmentActionEnum action;
    public PostCreateTransitGatewayPeeringAttachmentQueryParams withAction(PostCreateTransitGatewayPeeringAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTransitGatewayPeeringAttachmentVersionEnum version;
    public PostCreateTransitGatewayPeeringAttachmentQueryParams withVersion(PostCreateTransitGatewayPeeringAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}