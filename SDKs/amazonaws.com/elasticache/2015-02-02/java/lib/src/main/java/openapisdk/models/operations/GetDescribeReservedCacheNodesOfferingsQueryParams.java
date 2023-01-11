package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeReservedCacheNodesOfferingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeReservedCacheNodesOfferingsActionEnum action;
    public GetDescribeReservedCacheNodesOfferingsQueryParams withAction(GetDescribeReservedCacheNodesOfferingsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheNodeType")
    public String cacheNodeType;
    public GetDescribeReservedCacheNodesOfferingsQueryParams withCacheNodeType(String cacheNodeType) {
        this.cacheNodeType = cacheNodeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Duration")
    public String duration;
    public GetDescribeReservedCacheNodesOfferingsQueryParams withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeReservedCacheNodesOfferingsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeReservedCacheNodesOfferingsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OfferingType")
    public String offeringType;
    public GetDescribeReservedCacheNodesOfferingsQueryParams withOfferingType(String offeringType) {
        this.offeringType = offeringType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ProductDescription")
    public String productDescription;
    public GetDescribeReservedCacheNodesOfferingsQueryParams withProductDescription(String productDescription) {
        this.productDescription = productDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservedCacheNodesOfferingId")
    public String reservedCacheNodesOfferingId;
    public GetDescribeReservedCacheNodesOfferingsQueryParams withReservedCacheNodesOfferingId(String reservedCacheNodesOfferingId) {
        this.reservedCacheNodesOfferingId = reservedCacheNodesOfferingId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeReservedCacheNodesOfferingsVersionEnum version;
    public GetDescribeReservedCacheNodesOfferingsQueryParams withVersion(GetDescribeReservedCacheNodesOfferingsVersionEnum version) {
        this.version = version;
        return this;
    }
}