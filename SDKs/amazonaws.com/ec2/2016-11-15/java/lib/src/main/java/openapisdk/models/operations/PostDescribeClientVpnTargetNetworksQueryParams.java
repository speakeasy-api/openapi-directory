package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClientVpnTargetNetworksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeClientVpnTargetNetworksActionEnum action;
    public PostDescribeClientVpnTargetNetworksQueryParams withAction(PostDescribeClientVpnTargetNetworksActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeClientVpnTargetNetworksQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeClientVpnTargetNetworksQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeClientVpnTargetNetworksVersionEnum version;
    public PostDescribeClientVpnTargetNetworksQueryParams withVersion(PostDescribeClientVpnTargetNetworksVersionEnum version) {
        this.version = version;
        return this;
    }
}