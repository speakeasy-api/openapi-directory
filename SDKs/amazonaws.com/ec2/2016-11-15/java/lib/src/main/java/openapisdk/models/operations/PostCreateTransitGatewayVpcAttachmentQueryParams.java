package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayVpcAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateTransitGatewayVpcAttachmentActionEnum action;
    public PostCreateTransitGatewayVpcAttachmentQueryParams withAction(PostCreateTransitGatewayVpcAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateTransitGatewayVpcAttachmentVersionEnum version;
    public PostCreateTransitGatewayVpcAttachmentQueryParams withVersion(PostCreateTransitGatewayVpcAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}