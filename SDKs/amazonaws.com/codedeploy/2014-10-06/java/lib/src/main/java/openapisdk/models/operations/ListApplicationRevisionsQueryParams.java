package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApplicationRevisionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListApplicationRevisionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}