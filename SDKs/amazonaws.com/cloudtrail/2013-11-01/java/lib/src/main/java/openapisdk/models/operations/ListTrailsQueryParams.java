package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTrailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListTrailsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}