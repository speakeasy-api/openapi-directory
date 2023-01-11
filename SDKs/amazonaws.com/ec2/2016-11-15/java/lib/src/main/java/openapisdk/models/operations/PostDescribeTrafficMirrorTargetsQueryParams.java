package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTrafficMirrorTargetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTrafficMirrorTargetsActionEnum action;
    public PostDescribeTrafficMirrorTargetsQueryParams withAction(PostDescribeTrafficMirrorTargetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeTrafficMirrorTargetsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeTrafficMirrorTargetsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTrafficMirrorTargetsVersionEnum version;
    public PostDescribeTrafficMirrorTargetsQueryParams withVersion(PostDescribeTrafficMirrorTargetsVersionEnum version) {
        this.version = version;
        return this;
    }
}