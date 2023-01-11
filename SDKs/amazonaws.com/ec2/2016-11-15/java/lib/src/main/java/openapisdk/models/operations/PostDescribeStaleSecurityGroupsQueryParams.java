package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeStaleSecurityGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeStaleSecurityGroupsActionEnum action;
    public PostDescribeStaleSecurityGroupsQueryParams withAction(PostDescribeStaleSecurityGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeStaleSecurityGroupsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeStaleSecurityGroupsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeStaleSecurityGroupsVersionEnum version;
    public PostDescribeStaleSecurityGroupsQueryParams withVersion(PostDescribeStaleSecurityGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}