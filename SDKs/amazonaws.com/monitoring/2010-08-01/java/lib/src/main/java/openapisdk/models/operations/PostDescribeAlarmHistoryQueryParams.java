package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAlarmHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAlarmHistoryActionEnum action;
    public PostDescribeAlarmHistoryQueryParams withAction(PostDescribeAlarmHistoryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeAlarmHistoryQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeAlarmHistoryQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAlarmHistoryVersionEnum version;
    public PostDescribeAlarmHistoryQueryParams withVersion(PostDescribeAlarmHistoryVersionEnum version) {
        this.version = version;
        return this;
    }
}