package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNodegroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListNodegroupsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListNodegroupsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}