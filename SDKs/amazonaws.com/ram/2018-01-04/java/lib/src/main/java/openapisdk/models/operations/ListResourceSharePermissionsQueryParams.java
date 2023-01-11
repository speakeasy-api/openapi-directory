package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourceSharePermissionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public ListResourceSharePermissionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListResourceSharePermissionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}