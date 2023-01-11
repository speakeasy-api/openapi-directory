package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListCustomVerificationEmailTemplatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListCustomVerificationEmailTemplatesActionEnum action;
    public PostListCustomVerificationEmailTemplatesQueryParams withAction(PostListCustomVerificationEmailTemplatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostListCustomVerificationEmailTemplatesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostListCustomVerificationEmailTemplatesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListCustomVerificationEmailTemplatesVersionEnum version;
    public PostListCustomVerificationEmailTemplatesQueryParams withVersion(PostListCustomVerificationEmailTemplatesVersionEnum version) {
        this.version = version;
        return this;
    }
}