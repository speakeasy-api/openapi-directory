package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSpotInstanceRequestsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSpotInstanceRequestsActionEnum action;
    public PostDescribeSpotInstanceRequestsQueryParams withAction(PostDescribeSpotInstanceRequestsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeSpotInstanceRequestsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeSpotInstanceRequestsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSpotInstanceRequestsVersionEnum version;
    public PostDescribeSpotInstanceRequestsQueryParams withVersion(PostDescribeSpotInstanceRequestsVersionEnum version) {
        this.version = version;
        return this;
    }
}