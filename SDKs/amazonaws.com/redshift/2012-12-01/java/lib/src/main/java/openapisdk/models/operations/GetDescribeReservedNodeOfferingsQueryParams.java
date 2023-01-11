package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeReservedNodeOfferingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeReservedNodeOfferingsActionEnum action;
    public GetDescribeReservedNodeOfferingsQueryParams withAction(GetDescribeReservedNodeOfferingsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeReservedNodeOfferingsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeReservedNodeOfferingsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservedNodeOfferingId")
    public String reservedNodeOfferingId;
    public GetDescribeReservedNodeOfferingsQueryParams withReservedNodeOfferingId(String reservedNodeOfferingId) {
        this.reservedNodeOfferingId = reservedNodeOfferingId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeReservedNodeOfferingsVersionEnum version;
    public GetDescribeReservedNodeOfferingsQueryParams withVersion(GetDescribeReservedNodeOfferingsVersionEnum version) {
        this.version = version;
        return this;
    }
}