package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInternetGatewaysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeInternetGatewaysActionEnum action;
    public PostDescribeInternetGatewaysQueryParams withAction(PostDescribeInternetGatewaysActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeInternetGatewaysQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeInternetGatewaysQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeInternetGatewaysVersionEnum version;
    public PostDescribeInternetGatewaysQueryParams withVersion(PostDescribeInternetGatewaysVersionEnum version) {
        this.version = version;
        return this;
    }
}