package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeNotificationConfigurationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeNotificationConfigurationsActionEnum action;
    public GetDescribeNotificationConfigurationsQueryParams withAction(GetDescribeNotificationConfigurationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupNames")
    public String[] autoScalingGroupNames;
    public GetDescribeNotificationConfigurationsQueryParams withAutoScalingGroupNames(String[] autoScalingGroupNames) {
        this.autoScalingGroupNames = autoScalingGroupNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeNotificationConfigurationsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeNotificationConfigurationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeNotificationConfigurationsVersionEnum version;
    public GetDescribeNotificationConfigurationsQueryParams withVersion(GetDescribeNotificationConfigurationsVersionEnum version) {
        this.version = version;
        return this;
    }
}