package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SelectAggregateResourceConfigQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public SelectAggregateResourceConfigQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public SelectAggregateResourceConfigQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}