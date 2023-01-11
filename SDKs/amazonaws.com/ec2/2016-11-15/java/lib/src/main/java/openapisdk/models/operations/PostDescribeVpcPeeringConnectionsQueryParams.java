package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcPeeringConnectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeVpcPeeringConnectionsActionEnum action;
    public PostDescribeVpcPeeringConnectionsQueryParams withAction(PostDescribeVpcPeeringConnectionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeVpcPeeringConnectionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeVpcPeeringConnectionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeVpcPeeringConnectionsVersionEnum version;
    public PostDescribeVpcPeeringConnectionsQueryParams withVersion(PostDescribeVpcPeeringConnectionsVersionEnum version) {
        this.version = version;
        return this;
    }
}