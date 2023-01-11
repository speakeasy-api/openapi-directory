package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAcceptTransitGatewayPeeringAttachmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAcceptTransitGatewayPeeringAttachmentActionEnum action;
    public GetAcceptTransitGatewayPeeringAttachmentQueryParams withAction(GetAcceptTransitGatewayPeeringAttachmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAcceptTransitGatewayPeeringAttachmentQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayAttachmentId")
    public String transitGatewayAttachmentId;
    public GetAcceptTransitGatewayPeeringAttachmentQueryParams withTransitGatewayAttachmentId(String transitGatewayAttachmentId) {
        this.transitGatewayAttachmentId = transitGatewayAttachmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAcceptTransitGatewayPeeringAttachmentVersionEnum version;
    public GetAcceptTransitGatewayPeeringAttachmentQueryParams withVersion(GetAcceptTransitGatewayPeeringAttachmentVersionEnum version) {
        this.version = version;
        return this;
    }
}