package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEventSubscriptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEventSubscriptionsActionEnum action;
    public PostDescribeEventSubscriptionsQueryParams withAction(PostDescribeEventSubscriptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeEventSubscriptionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeEventSubscriptionsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEventSubscriptionsVersionEnum version;
    public PostDescribeEventSubscriptionsQueryParams withVersion(PostDescribeEventSubscriptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}