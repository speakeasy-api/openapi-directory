package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBranchesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListBranchesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListBranchesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}