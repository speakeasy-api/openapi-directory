package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRoutesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListRoutesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListRoutesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}