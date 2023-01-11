package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchGameSessionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public SearchGameSessionsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public SearchGameSessionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}