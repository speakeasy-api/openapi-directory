package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBuildsForProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListBuildsForProjectQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}