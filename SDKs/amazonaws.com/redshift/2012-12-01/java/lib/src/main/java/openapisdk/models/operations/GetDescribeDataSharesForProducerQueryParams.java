package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDataSharesForProducerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDataSharesForProducerActionEnum action;
    public GetDescribeDataSharesForProducerQueryParams withAction(GetDescribeDataSharesForProducerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeDataSharesForProducerQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeDataSharesForProducerQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ProducerArn")
    public String producerArn;
    public GetDescribeDataSharesForProducerQueryParams withProducerArn(String producerArn) {
        this.producerArn = producerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public GetDescribeDataSharesForProducerStatusEnum status;
    public GetDescribeDataSharesForProducerQueryParams withStatus(GetDescribeDataSharesForProducerStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDataSharesForProducerVersionEnum version;
    public GetDescribeDataSharesForProducerQueryParams withVersion(GetDescribeDataSharesForProducerVersionEnum version) {
        this.version = version;
        return this;
    }
}