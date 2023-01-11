package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeStoreImageTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeStoreImageTasksActionEnum action;
    public PostDescribeStoreImageTasksQueryParams withAction(PostDescribeStoreImageTasksActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeStoreImageTasksQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeStoreImageTasksQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeStoreImageTasksVersionEnum version;
    public PostDescribeStoreImageTasksQueryParams withVersion(PostDescribeStoreImageTasksVersionEnum version) {
        this.version = version;
        return this;
    }
}