package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRejectTransitGatewayVpcAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRejectTransitGatewayVpcAttachmentActionEnum action;
    public GetRejectTransitGatewayVpcAttachmentQueryParams withAction(GetRejectTransitGatewayVpcAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetRejectTransitGatewayVpcAttachmentQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayAttachmentId")
    public String transitGatewayAttachmentId;
    public GetRejectTransitGatewayVpcAttachmentQueryParams withTransitGatewayAttachmentId(String transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRejectTransitGatewayVpcAttachmentVersionEnum version;
    public GetRejectTransitGatewayVpcAttachmentQueryParams withVersion(GetRejectTransitGatewayVpcAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}