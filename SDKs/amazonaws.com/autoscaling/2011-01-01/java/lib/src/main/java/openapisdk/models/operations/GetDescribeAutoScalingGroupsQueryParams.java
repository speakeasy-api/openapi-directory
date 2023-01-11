package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeAutoScalingGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeAutoScalingGroupsActionEnum action;
    public GetDescribeAutoScalingGroupsQueryParams withAction(GetDescribeAutoScalingGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupNames")
    public String[] autoScalingGroupNames;
    public GetDescribeAutoScalingGroupsQueryParams withAutoScalingGroupNames(String[] autoScalingGroupNames) {
        this.autoScalingGroupNames = autoScalingGroupNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeAutoScalingGroupsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeAutoScalingGroupsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeAutoScalingGroupsVersionEnum version;
    public GetDescribeAutoScalingGroupsQueryParams withVersion(GetDescribeAutoScalingGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}