package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeAutoScalingInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeAutoScalingInstancesActionEnum action;
    public GetDescribeAutoScalingInstancesQueryParams withAction(GetDescribeAutoScalingInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceIds")
    public String[] instanceIds;
    public GetDescribeAutoScalingInstancesQueryParams withInstanceIds(String[] instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeAutoScalingInstancesQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeAutoScalingInstancesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeAutoScalingInstancesVersionEnum version;
    public GetDescribeAutoScalingInstancesQueryParams withVersion(GetDescribeAutoScalingInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}