package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAcceptReservedNodeExchangeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAcceptReservedNodeExchangeActionEnum action;
    public GetAcceptReservedNodeExchangeQueryParams withAction(GetAcceptReservedNodeExchangeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservedNodeId")
    public String reservedNodeId;
    public GetAcceptReservedNodeExchangeQueryParams withReservedNodeId(String reservedNodeId) {
        this.reservedNodeId = reservedNodeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetReservedNodeOfferingId")
    public String targetReservedNodeOfferingId;
    public GetAcceptReservedNodeExchangeQueryParams withTargetReservedNodeOfferingId(String targetReservedNodeOfferingId) {
        this.targetReservedNodeOfferingId = targetReservedNodeOfferingId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAcceptReservedNodeExchangeVersionEnum version;
    public GetAcceptReservedNodeExchangeQueryParams withVersion(GetAcceptReservedNodeExchangeVersionEnum version) {
        this.version = version;
        return this;
    }
}