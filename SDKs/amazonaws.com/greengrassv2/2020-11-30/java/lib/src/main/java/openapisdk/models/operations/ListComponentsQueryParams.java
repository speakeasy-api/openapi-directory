package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListComponentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListComponentsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListComponentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scope")
    public ListComponentsScopeEnum scope;
    public ListComponentsQueryParams withScope(ListComponentsScopeEnum scope) {
        this.scope = scope;
        return this;
    }
}