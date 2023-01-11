package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUniqueProblemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListUniqueProblemsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}