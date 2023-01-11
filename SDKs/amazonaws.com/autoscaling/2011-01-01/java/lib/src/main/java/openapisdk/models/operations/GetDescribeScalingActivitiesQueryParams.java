package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeScalingActivitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeScalingActivitiesActionEnum action;
    public GetDescribeScalingActivitiesQueryParams withAction(GetDescribeScalingActivitiesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ActivityIds")
    public String[] activityIds;
    public GetDescribeScalingActivitiesQueryParams withActivityIds(String[] activityIds) {
        this.activityIds = activityIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDescribeScalingActivitiesQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IncludeDeletedGroups")
    public Boolean includeDeletedGroups;
    public GetDescribeScalingActivitiesQueryParams withIncludeDeletedGroups(Boolean includeDeletedGroups) {
        this.includeDeletedGroups = includeDeletedGroups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeScalingActivitiesQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeScalingActivitiesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeScalingActivitiesVersionEnum version;
    public GetDescribeScalingActivitiesQueryParams withVersion(GetDescribeScalingActivitiesVersionEnum version) {
        this.version = version;
        return this;
    }
}