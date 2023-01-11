package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceEventWindowsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeInstanceEventWindowsActionEnum action;
    public PostDescribeInstanceEventWindowsQueryParams withAction(PostDescribeInstanceEventWindowsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeInstanceEventWindowsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeInstanceEventWindowsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeInstanceEventWindowsVersionEnum version;
    public PostDescribeInstanceEventWindowsQueryParams withVersion(PostDescribeInstanceEventWindowsVersionEnum version) {
        this.version = version;
        return this;
    }
}