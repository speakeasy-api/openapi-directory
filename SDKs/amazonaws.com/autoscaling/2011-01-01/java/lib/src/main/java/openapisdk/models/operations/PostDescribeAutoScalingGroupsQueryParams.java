package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAutoScalingGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAutoScalingGroupsActionEnum action;
    public PostDescribeAutoScalingGroupsQueryParams withAction(PostDescribeAutoScalingGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeAutoScalingGroupsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeAutoScalingGroupsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAutoScalingGroupsVersionEnum version;
    public PostDescribeAutoScalingGroupsQueryParams withVersion(PostDescribeAutoScalingGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}