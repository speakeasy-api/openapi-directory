package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedCacheNodesOfferingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeReservedCacheNodesOfferingsActionEnum action;
    public PostDescribeReservedCacheNodesOfferingsQueryParams withAction(PostDescribeReservedCacheNodesOfferingsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeReservedCacheNodesOfferingsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeReservedCacheNodesOfferingsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeReservedCacheNodesOfferingsVersionEnum version;
    public PostDescribeReservedCacheNodesOfferingsQueryParams withVersion(PostDescribeReservedCacheNodesOfferingsVersionEnum version) {
        this.version = version;
        return this;
    }
}