package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptTransitGatewayVpcAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAcceptTransitGatewayVpcAttachmentActionEnum action;
    public PostAcceptTransitGatewayVpcAttachmentQueryParams withAction(PostAcceptTransitGatewayVpcAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAcceptTransitGatewayVpcAttachmentVersionEnum version;
    public PostAcceptTransitGatewayVpcAttachmentQueryParams withVersion(PostAcceptTransitGatewayVpcAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}