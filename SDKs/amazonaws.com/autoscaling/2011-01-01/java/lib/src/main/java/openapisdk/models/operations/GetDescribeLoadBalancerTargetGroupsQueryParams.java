package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeLoadBalancerTargetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeLoadBalancerTargetGroupsActionEnum action;
    public GetDescribeLoadBalancerTargetGroupsQueryParams withAction(GetDescribeLoadBalancerTargetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDescribeLoadBalancerTargetGroupsQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeLoadBalancerTargetGroupsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeLoadBalancerTargetGroupsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeLoadBalancerTargetGroupsVersionEnum version;
    public GetDescribeLoadBalancerTargetGroupsQueryParams withVersion(GetDescribeLoadBalancerTargetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}