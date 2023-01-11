package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePublicIpv4PoolsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribePublicIpv4PoolsActionEnum action;
    public PostDescribePublicIpv4PoolsQueryParams withAction(PostDescribePublicIpv4PoolsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribePublicIpv4PoolsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribePublicIpv4PoolsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribePublicIpv4PoolsVersionEnum version;
    public PostDescribePublicIpv4PoolsQueryParams withVersion(PostDescribePublicIpv4PoolsVersionEnum version) {
        this.version = version;
        return this;
    }
}