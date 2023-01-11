package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcEndpointServiceConfigurationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeVpcEndpointServiceConfigurationsActionEnum action;
    public PostDescribeVpcEndpointServiceConfigurationsQueryParams withAction(PostDescribeVpcEndpointServiceConfigurationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeVpcEndpointServiceConfigurationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeVpcEndpointServiceConfigurationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeVpcEndpointServiceConfigurationsVersionEnum version;
    public PostDescribeVpcEndpointServiceConfigurationsQueryParams withVersion(PostDescribeVpcEndpointServiceConfigurationsVersionEnum version) {
        this.version = version;
        return this;
    }
}