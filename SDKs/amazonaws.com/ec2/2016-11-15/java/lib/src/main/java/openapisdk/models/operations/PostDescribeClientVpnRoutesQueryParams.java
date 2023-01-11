package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClientVpnRoutesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeClientVpnRoutesActionEnum action;
    public PostDescribeClientVpnRoutesQueryParams withAction(PostDescribeClientVpnRoutesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeClientVpnRoutesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeClientVpnRoutesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeClientVpnRoutesVersionEnum version;
    public PostDescribeClientVpnRoutesQueryParams withVersion(PostDescribeClientVpnRoutesVersionEnum version) {
        this.version = version;
        return this;
    }
}