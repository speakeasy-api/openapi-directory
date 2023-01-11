package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListObjectAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListObjectAttributesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListObjectAttributesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}