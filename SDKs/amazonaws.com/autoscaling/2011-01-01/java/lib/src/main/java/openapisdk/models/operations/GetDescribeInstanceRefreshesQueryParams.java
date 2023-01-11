package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeInstanceRefreshesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeInstanceRefreshesActionEnum action;
    public GetDescribeInstanceRefreshesQueryParams withAction(GetDescribeInstanceRefreshesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDescribeInstanceRefreshesQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceRefreshIds")
    public String[] instanceRefreshIds;
    public GetDescribeInstanceRefreshesQueryParams withInstanceRefreshIds(String[] instanceRefreshIds) {
        this.instanceRefreshIds = instanceRefreshIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeInstanceRefreshesQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeInstanceRefreshesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeInstanceRefreshesVersionEnum version;
    public GetDescribeInstanceRefreshesQueryParams withVersion(GetDescribeInstanceRefreshesVersionEnum version) {
        this.version = version;
        return this;
    }
}