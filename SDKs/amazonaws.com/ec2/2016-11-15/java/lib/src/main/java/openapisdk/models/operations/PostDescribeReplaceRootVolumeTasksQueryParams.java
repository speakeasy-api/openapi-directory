package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReplaceRootVolumeTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeReplaceRootVolumeTasksActionEnum action;
    public PostDescribeReplaceRootVolumeTasksQueryParams withAction(PostDescribeReplaceRootVolumeTasksActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeReplaceRootVolumeTasksQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeReplaceRootVolumeTasksQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeReplaceRootVolumeTasksVersionEnum version;
    public PostDescribeReplaceRootVolumeTasksQueryParams withVersion(PostDescribeReplaceRootVolumeTasksVersionEnum version) {
        this.version = version;
        return this;
    }
}