package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeWarmPoolQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeWarmPoolActionEnum action;
    public GetDescribeWarmPoolQueryParams withAction(GetDescribeWarmPoolActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDescribeWarmPoolQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeWarmPoolQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeWarmPoolQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeWarmPoolVersionEnum version;
    public GetDescribeWarmPoolQueryParams withVersion(GetDescribeWarmPoolVersionEnum version) {
        this.version = version;
        return this;
    }
}