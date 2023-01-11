package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcClassicLinkDnsSupportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeVpcClassicLinkDnsSupportActionEnum action;
    public PostDescribeVpcClassicLinkDnsSupportQueryParams withAction(PostDescribeVpcClassicLinkDnsSupportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostDescribeVpcClassicLinkDnsSupportQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeVpcClassicLinkDnsSupportQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeVpcClassicLinkDnsSupportVersionEnum version;
    public PostDescribeVpcClassicLinkDnsSupportQueryParams withVersion(PostDescribeVpcClassicLinkDnsSupportVersionEnum version) {
        this.version = version;
        return this;
    }
}