package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNotificationConfigurationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeNotificationConfigurationsActionEnum action;
    public PostDescribeNotificationConfigurationsQueryParams withAction(PostDescribeNotificationConfigurationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeNotificationConfigurationsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeNotificationConfigurationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeNotificationConfigurationsVersionEnum version;
    public PostDescribeNotificationConfigurationsQueryParams withVersion(PostDescribeNotificationConfigurationsVersionEnum version) {
        this.version = version;
        return this;
    }
}