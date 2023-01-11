package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDataSharesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDataSharesActionEnum action;
    public GetDescribeDataSharesQueryParams withAction(GetDescribeDataSharesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DataShareArn")
    public String dataShareArn;
    public GetDescribeDataSharesQueryParams withDataShareArn(String dataShareArn) {
        this.dataShareArn = dataShareArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeDataSharesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeDataSharesQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDataSharesVersionEnum version;
    public GetDescribeDataSharesQueryParams withVersion(GetDescribeDataSharesVersionEnum version) {
        this.version = version;
        return this;
    }
}