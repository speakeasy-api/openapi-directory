package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClientVpnAuthorizationRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeClientVpnAuthorizationRulesActionEnum action;
    public PostDescribeClientVpnAuthorizationRulesQueryParams withAction(PostDescribeClientVpnAuthorizationRulesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeClientVpnAuthorizationRulesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeClientVpnAuthorizationRulesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeClientVpnAuthorizationRulesVersionEnum version;
    public PostDescribeClientVpnAuthorizationRulesQueryParams withVersion(PostDescribeClientVpnAuthorizationRulesVersionEnum version) {
        this.version = version;
        return this;
    }
}