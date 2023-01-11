package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSecurityGroupRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSecurityGroupRulesActionEnum action;
    public PostDescribeSecurityGroupRulesQueryParams withAction(PostDescribeSecurityGroupRulesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeSecurityGroupRulesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeSecurityGroupRulesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSecurityGroupRulesVersionEnum version;
    public PostDescribeSecurityGroupRulesQueryParams withVersion(PostDescribeSecurityGroupRulesVersionEnum version) {
        this.version = version;
        return this;
    }
}