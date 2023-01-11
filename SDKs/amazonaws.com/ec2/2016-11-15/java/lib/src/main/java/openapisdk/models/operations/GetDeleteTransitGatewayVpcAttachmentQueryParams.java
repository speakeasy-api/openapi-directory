package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteTransitGatewayVpcAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteTransitGatewayVpcAttachmentActionEnum action;
    public GetDeleteTransitGatewayVpcAttachmentQueryParams withAction(GetDeleteTransitGatewayVpcAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteTransitGatewayVpcAttachmentQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayAttachmentId")
    public String transitGatewayAttachmentId;
    public GetDeleteTransitGatewayVpcAttachmentQueryParams withTransitGatewayAttachmentId(String transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteTransitGatewayVpcAttachmentVersionEnum version;
    public GetDeleteTransitGatewayVpcAttachmentQueryParams withVersion(GetDeleteTransitGatewayVpcAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}