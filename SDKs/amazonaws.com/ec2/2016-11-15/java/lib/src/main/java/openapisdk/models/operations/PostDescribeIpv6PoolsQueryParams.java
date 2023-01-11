package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeIpv6PoolsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeIpv6PoolsActionEnum action;
    public PostDescribeIpv6PoolsQueryParams withAction(PostDescribeIpv6PoolsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeIpv6PoolsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeIpv6PoolsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeIpv6PoolsVersionEnum version;
    public PostDescribeIpv6PoolsQueryParams withVersion(PostDescribeIpv6PoolsVersionEnum version) {
        this.version = version;
        return this;
    }
}