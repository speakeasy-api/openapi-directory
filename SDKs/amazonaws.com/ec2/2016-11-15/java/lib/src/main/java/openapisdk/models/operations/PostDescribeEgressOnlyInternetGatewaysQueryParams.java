package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEgressOnlyInternetGatewaysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEgressOnlyInternetGatewaysActionEnum action;
    public PostDescribeEgressOnlyInternetGatewaysQueryParams withAction(PostDescribeEgressOnlyInternetGatewaysActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeEgressOnlyInternetGatewaysQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeEgressOnlyInternetGatewaysQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEgressOnlyInternetGatewaysVersionEnum version;
    public PostDescribeEgressOnlyInternetGatewaysQueryParams withVersion(PostDescribeEgressOnlyInternetGatewaysVersionEnum version) {
        this.version = version;
        return this;
    }
}