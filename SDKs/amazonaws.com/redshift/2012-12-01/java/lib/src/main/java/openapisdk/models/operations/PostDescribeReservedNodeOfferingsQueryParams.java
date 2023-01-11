package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedNodeOfferingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeReservedNodeOfferingsActionEnum action;
    public PostDescribeReservedNodeOfferingsQueryParams withAction(PostDescribeReservedNodeOfferingsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeReservedNodeOfferingsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeReservedNodeOfferingsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeReservedNodeOfferingsVersionEnum version;
    public PostDescribeReservedNodeOfferingsQueryParams withVersion(PostDescribeReservedNodeOfferingsVersionEnum version) {
        this.version = version;
        return this;
    }
}