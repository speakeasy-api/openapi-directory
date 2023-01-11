package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTestGridSessionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResult")
    public String maxResult;
    public ListTestGridSessionsQueryParams withMaxResult(String maxResult) {
        this.maxResult = maxResult;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListTestGridSessionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}