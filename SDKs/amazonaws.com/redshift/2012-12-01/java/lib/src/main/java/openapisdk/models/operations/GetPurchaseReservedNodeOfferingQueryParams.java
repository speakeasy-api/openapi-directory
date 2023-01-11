package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPurchaseReservedNodeOfferingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPurchaseReservedNodeOfferingActionEnum action;
    public GetPurchaseReservedNodeOfferingQueryParams withAction(GetPurchaseReservedNodeOfferingActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NodeCount")
    public Long nodeCount;
    public GetPurchaseReservedNodeOfferingQueryParams withNodeCount(Long nodeCount) {
        this.nodeCount = nodeCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservedNodeOfferingId")
    public String reservedNodeOfferingId;
    public GetPurchaseReservedNodeOfferingQueryParams withReservedNodeOfferingId(String reservedNodeOfferingId) {
        this.reservedNodeOfferingId = reservedNodeOfferingId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPurchaseReservedNodeOfferingVersionEnum version;
    public GetPurchaseReservedNodeOfferingQueryParams withVersion(GetPurchaseReservedNodeOfferingVersionEnum version) {
        this.version = version;
        return this;
    }
}