package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SelectResourceConfigQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public SelectResourceConfigQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public SelectResourceConfigQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}