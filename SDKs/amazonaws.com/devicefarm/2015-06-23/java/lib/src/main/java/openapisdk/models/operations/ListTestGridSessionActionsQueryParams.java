package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTestGridSessionActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResult")
    public String maxResult;
    public ListTestGridSessionActionsQueryParams withMaxResult(String maxResult) {
        this.maxResult = maxResult;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListTestGridSessionActionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}