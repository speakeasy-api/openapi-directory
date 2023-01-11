package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTrafficMirrorSessionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTrafficMirrorSessionsActionEnum action;
    public PostDescribeTrafficMirrorSessionsQueryParams withAction(PostDescribeTrafficMirrorSessionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeTrafficMirrorSessionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeTrafficMirrorSessionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTrafficMirrorSessionsVersionEnum version;
    public PostDescribeTrafficMirrorSessionsQueryParams withVersion(PostDescribeTrafficMirrorSessionsVersionEnum version) {
        this.version = version;
        return this;
    }
}