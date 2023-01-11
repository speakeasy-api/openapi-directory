package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommentsForPullRequestQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public GetCommentsForPullRequestQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public GetCommentsForPullRequestQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}