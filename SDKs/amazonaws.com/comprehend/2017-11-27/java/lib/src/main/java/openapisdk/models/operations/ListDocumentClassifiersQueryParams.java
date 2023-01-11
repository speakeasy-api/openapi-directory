package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDocumentClassifiersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListDocumentClassifiersQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListDocumentClassifiersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}