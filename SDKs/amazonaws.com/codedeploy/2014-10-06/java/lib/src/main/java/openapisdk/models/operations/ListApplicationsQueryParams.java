package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApplicationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListApplicationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}