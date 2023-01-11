package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcEndpointServicePermissionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeVpcEndpointServicePermissionsActionEnum action;
    public PostDescribeVpcEndpointServicePermissionsQueryParams withAction(PostDescribeVpcEndpointServicePermissionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeVpcEndpointServicePermissionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeVpcEndpointServicePermissionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeVpcEndpointServicePermissionsVersionEnum version;
    public PostDescribeVpcEndpointServicePermissionsQueryParams withVersion(PostDescribeVpcEndpointServicePermissionsVersionEnum version) {
        this.version = version;
        return this;
    }
}