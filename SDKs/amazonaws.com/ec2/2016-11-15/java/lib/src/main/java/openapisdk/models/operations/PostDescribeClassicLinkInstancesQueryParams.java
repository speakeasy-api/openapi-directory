package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClassicLinkInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeClassicLinkInstancesActionEnum action;
    public PostDescribeClassicLinkInstancesQueryParams withAction(PostDescribeClassicLinkInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeClassicLinkInstancesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeClassicLinkInstancesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeClassicLinkInstancesVersionEnum version;
    public PostDescribeClassicLinkInstancesQueryParams withVersion(PostDescribeClassicLinkInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}