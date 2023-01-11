package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectTransitGatewayVpcAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRejectTransitGatewayVpcAttachmentActionEnum action;
    public PostRejectTransitGatewayVpcAttachmentQueryParams withAction(PostRejectTransitGatewayVpcAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRejectTransitGatewayVpcAttachmentVersionEnum version;
    public PostRejectTransitGatewayVpcAttachmentQueryParams withVersion(PostRejectTransitGatewayVpcAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}