package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListKeywordsForDataSourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListKeywordsForDataSourceQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListKeywordsForDataSourceQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public ListKeywordsForDataSourceSourceEnum source;
    public ListKeywordsForDataSourceQueryParams withSource(ListKeywordsForDataSourceSourceEnum source) {
        this.source = source;
        return this;
    }
}