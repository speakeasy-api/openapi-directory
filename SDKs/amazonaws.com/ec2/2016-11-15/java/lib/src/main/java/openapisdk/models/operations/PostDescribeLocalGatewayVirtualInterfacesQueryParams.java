package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLocalGatewayVirtualInterfacesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLocalGatewayVirtualInterfacesActionEnum action;
    public PostDescribeLocalGatewayVirtualInterfacesQueryParams withAction(PostDescribeLocalGatewayVirtualInterfacesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeLocalGatewayVirtualInterfacesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeLocalGatewayVirtualInterfacesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLocalGatewayVirtualInterfacesVersionEnum version;
    public PostDescribeLocalGatewayVirtualInterfacesQueryParams withVersion(PostDescribeLocalGatewayVirtualInterfacesVersionEnum version) {
        this.version = version;
        return this;
    }
}