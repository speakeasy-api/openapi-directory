package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayVpcAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteTransitGatewayVpcAttachmentActionEnum action;
    public PostDeleteTransitGatewayVpcAttachmentQueryParams withAction(PostDeleteTransitGatewayVpcAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteTransitGatewayVpcAttachmentVersionEnum version;
    public PostDeleteTransitGatewayVpcAttachmentQueryParams withVersion(PostDeleteTransitGatewayVpcAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}