package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkloadSharesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListWorkloadSharesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListWorkloadSharesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SharedWithPrefix")
    public String sharedWithPrefix;
    public ListWorkloadSharesQueryParams withSharedWithPrefix(String sharedWithPrefix) {
        this.sharedWithPrefix = sharedWithPrefix;
        return this;
    }
}