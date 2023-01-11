package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClientVpnConnectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeClientVpnConnectionsActionEnum action;
    public PostDescribeClientVpnConnectionsQueryParams withAction(PostDescribeClientVpnConnectionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeClientVpnConnectionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeClientVpnConnectionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeClientVpnConnectionsVersionEnum version;
    public PostDescribeClientVpnConnectionsQueryParams withVersion(PostDescribeClientVpnConnectionsVersionEnum version) {
        this.version = version;
        return this;
    }
}