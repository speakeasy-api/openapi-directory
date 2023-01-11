package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAutoScalingInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAutoScalingInstancesActionEnum action;
    public PostDescribeAutoScalingInstancesQueryParams withAction(PostDescribeAutoScalingInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeAutoScalingInstancesQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeAutoScalingInstancesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAutoScalingInstancesVersionEnum version;
    public PostDescribeAutoScalingInstancesQueryParams withVersion(PostDescribeAutoScalingInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}