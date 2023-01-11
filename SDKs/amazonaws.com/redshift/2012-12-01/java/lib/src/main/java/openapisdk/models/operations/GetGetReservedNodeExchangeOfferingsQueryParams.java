package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetReservedNodeExchangeOfferingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetReservedNodeExchangeOfferingsActionEnum action;
    public GetGetReservedNodeExchangeOfferingsQueryParams withAction(GetGetReservedNodeExchangeOfferingsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetGetReservedNodeExchangeOfferingsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetGetReservedNodeExchangeOfferingsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservedNodeId")
    public String reservedNodeId;
    public GetGetReservedNodeExchangeOfferingsQueryParams withReservedNodeId(String reservedNodeId) {
        this.reservedNodeId = reservedNodeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetReservedNodeExchangeOfferingsVersionEnum version;
    public GetGetReservedNodeExchangeOfferingsQueryParams withVersion(GetGetReservedNodeExchangeOfferingsVersionEnum version) {
        this.version = version;
        return this;
    }
}