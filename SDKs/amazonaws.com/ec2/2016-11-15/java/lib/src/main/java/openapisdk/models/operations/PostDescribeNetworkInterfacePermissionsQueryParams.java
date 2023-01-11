package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNetworkInterfacePermissionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeNetworkInterfacePermissionsActionEnum action;
    public PostDescribeNetworkInterfacePermissionsQueryParams withAction(PostDescribeNetworkInterfacePermissionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeNetworkInterfacePermissionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeNetworkInterfacePermissionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeNetworkInterfacePermissionsVersionEnum version;
    public PostDescribeNetworkInterfacePermissionsQueryParams withVersion(PostDescribeNetworkInterfacePermissionsVersionEnum version) {
        this.version = version;
        return this;
    }
}