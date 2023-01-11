package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcEndpointConnectionNotificationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeVpcEndpointConnectionNotificationsActionEnum action;
    public PostDescribeVpcEndpointConnectionNotificationsQueryParams withAction(PostDescribeVpcEndpointConnectionNotificationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeVpcEndpointConnectionNotificationsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeVpcEndpointConnectionNotificationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeVpcEndpointConnectionNotificationsVersionEnum version;
    public PostDescribeVpcEndpointConnectionNotificationsQueryParams withVersion(PostDescribeVpcEndpointConnectionNotificationsVersionEnum version) {
        this.version = version;
        return this;
    }
}