package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListDevicesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListDevicesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}