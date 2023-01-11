package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSpotFleetRequestsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSpotFleetRequestsActionEnum action;
    public PostDescribeSpotFleetRequestsQueryParams withAction(PostDescribeSpotFleetRequestsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeSpotFleetRequestsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeSpotFleetRequestsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSpotFleetRequestsVersionEnum version;
    public PostDescribeSpotFleetRequestsQueryParams withVersion(PostDescribeSpotFleetRequestsVersionEnum version) {
        this.version = version;
        return this;
    }
}