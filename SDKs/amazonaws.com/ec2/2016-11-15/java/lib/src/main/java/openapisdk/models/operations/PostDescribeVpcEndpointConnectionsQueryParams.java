package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcEndpointConnectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeVpcEndpointConnectionsActionEnum action;
    public PostDescribeVpcEndpointConnectionsQueryParams withAction(PostDescribeVpcEndpointConnectionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeVpcEndpointConnectionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeVpcEndpointConnectionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeVpcEndpointConnectionsVersionEnum version;
    public PostDescribeVpcEndpointConnectionsQueryParams withVersion(PostDescribeVpcEndpointConnectionsVersionEnum version) {
        this.version = version;
        return this;
    }
}