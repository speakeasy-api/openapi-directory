package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeEventSubscriptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeEventSubscriptionsActionEnum action;
    public GetDescribeEventSubscriptionsQueryParams withAction(GetDescribeEventSubscriptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeEventSubscriptionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeEventSubscriptionsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SubscriptionName")
    public String subscriptionName;
    public GetDescribeEventSubscriptionsQueryParams withSubscriptionName(String subscriptionName) {
        this.subscriptionName = subscriptionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeEventSubscriptionsVersionEnum version;
    public GetDescribeEventSubscriptionsQueryParams withVersion(GetDescribeEventSubscriptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}