package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAcceptTransitGatewayVpcAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAcceptTransitGatewayVpcAttachmentActionEnum action;
    public GetAcceptTransitGatewayVpcAttachmentQueryParams withAction(GetAcceptTransitGatewayVpcAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAcceptTransitGatewayVpcAttachmentQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayAttachmentId")
    public String transitGatewayAttachmentId;
    public GetAcceptTransitGatewayVpcAttachmentQueryParams withTransitGatewayAttachmentId(String transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAcceptTransitGatewayVpcAttachmentVersionEnum version;
    public GetAcceptTransitGatewayVpcAttachmentQueryParams withVersion(GetAcceptTransitGatewayVpcAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}