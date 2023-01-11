package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClientVpnEndpointsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeClientVpnEndpointsActionEnum action;
    public PostDescribeClientVpnEndpointsQueryParams withAction(PostDescribeClientVpnEndpointsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeClientVpnEndpointsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeClientVpnEndpointsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeClientVpnEndpointsVersionEnum version;
    public PostDescribeClientVpnEndpointsQueryParams withVersion(PostDescribeClientVpnEndpointsVersionEnum version) {
        this.version = version;
        return this;
    }
}