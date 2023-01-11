package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTransitGatewayVpcAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyTransitGatewayVpcAttachmentActionEnum action;
    public PostModifyTransitGatewayVpcAttachmentQueryParams withAction(PostModifyTransitGatewayVpcAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyTransitGatewayVpcAttachmentVersionEnum version;
    public PostModifyTransitGatewayVpcAttachmentQueryParams withVersion(PostModifyTransitGatewayVpcAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}