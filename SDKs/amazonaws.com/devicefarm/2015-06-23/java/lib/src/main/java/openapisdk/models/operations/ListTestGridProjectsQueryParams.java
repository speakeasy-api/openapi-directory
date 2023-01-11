package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTestGridProjectsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResult")
    public String maxResult;
    public ListTestGridProjectsQueryParams withMaxResult(String maxResult) {
        this.maxResult = maxResult;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListTestGridProjectsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}