package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeReservedCacheNodesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeReservedCacheNodesActionEnum action;
    public GetDescribeReservedCacheNodesQueryParams withAction(GetDescribeReservedCacheNodesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheNodeType")
    public String cacheNodeType;
    public GetDescribeReservedCacheNodesQueryParams withCacheNodeType(String cacheNodeType) {
        this.cacheNodeType = cacheNodeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Duration")
    public String duration;
    public GetDescribeReservedCacheNodesQueryParams withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeReservedCacheNodesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeReservedCacheNodesQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OfferingType")
    public String offeringType;
    public GetDescribeReservedCacheNodesQueryParams withOfferingType(String offeringType) {
        this.offeringType = offeringType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ProductDescription")
    public String productDescription;
    public GetDescribeReservedCacheNodesQueryParams withProductDescription(String productDescription) {
        this.productDescription = productDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservedCacheNodeId")
    public String reservedCacheNodeId;
    public GetDescribeReservedCacheNodesQueryParams withReservedCacheNodeId(String reservedCacheNodeId) {
        this.reservedCacheNodeId = reservedCacheNodeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReservedCacheNodesOfferingId")
    public String reservedCacheNodesOfferingId;
    public GetDescribeReservedCacheNodesQueryParams withReservedCacheNodesOfferingId(String reservedCacheNodesOfferingId) {
        this.reservedCacheNodesOfferingId = reservedCacheNodesOfferingId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeReservedCacheNodesVersionEnum version;
    public GetDescribeReservedCacheNodesQueryParams withVersion(GetDescribeReservedCacheNodesVersionEnum version) {
        this.version = version;
        return this;
    }
}