package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetReservedNodeExchangeOfferingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetReservedNodeExchangeOfferingsActionEnum action;
    public PostGetReservedNodeExchangeOfferingsQueryParams withAction(PostGetReservedNodeExchangeOfferingsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostGetReservedNodeExchangeOfferingsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostGetReservedNodeExchangeOfferingsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetReservedNodeExchangeOfferingsVersionEnum version;
    public PostGetReservedNodeExchangeOfferingsQueryParams withVersion(PostGetReservedNodeExchangeOfferingsVersionEnum version) {
        this.version = version;
        return this;
    }
}