package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLocalGatewayVirtualInterfaceGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLocalGatewayVirtualInterfaceGroupsActionEnum action;
    public PostDescribeLocalGatewayVirtualInterfaceGroupsQueryParams withAction(PostDescribeLocalGatewayVirtualInterfaceGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeLocalGatewayVirtualInterfaceGroupsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeLocalGatewayVirtualInterfaceGroupsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum version;
    public PostDescribeLocalGatewayVirtualInterfaceGroupsQueryParams withVersion(PostDescribeLocalGatewayVirtualInterfaceGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}