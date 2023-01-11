package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRejectTransitGatewayPeeringAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRejectTransitGatewayPeeringAttachmentActionEnum action;
    public GetRejectTransitGatewayPeeringAttachmentQueryParams withAction(GetRejectTransitGatewayPeeringAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetRejectTransitGatewayPeeringAttachmentQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayAttachmentId")
    public String transitGatewayAttachmentId;
    public GetRejectTransitGatewayPeeringAttachmentQueryParams withTransitGatewayAttachmentId(String transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRejectTransitGatewayPeeringAttachmentVersionEnum version;
    public GetRejectTransitGatewayPeeringAttachmentQueryParams withVersion(GetRejectTransitGatewayPeeringAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}