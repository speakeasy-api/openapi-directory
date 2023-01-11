package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDataSharesForConsumerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDataSharesForConsumerActionEnum action;
    public GetDescribeDataSharesForConsumerQueryParams withAction(GetDescribeDataSharesForConsumerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConsumerArn")
    public String consumerArn;
    public GetDescribeDataSharesForConsumerQueryParams withConsumerArn(String consumerArn) {
        this.consumerArn = consumerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeDataSharesForConsumerQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeDataSharesForConsumerQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public GetDescribeDataSharesForConsumerStatusEnum status;
    public GetDescribeDataSharesForConsumerQueryParams withStatus(GetDescribeDataSharesForConsumerStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDataSharesForConsumerVersionEnum version;
    public GetDescribeDataSharesForConsumerQueryParams withVersion(GetDescribeDataSharesForConsumerVersionEnum version) {
        this.version = version;
        return this;
    }
}