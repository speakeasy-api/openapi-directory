package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProjectsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListProjectsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}