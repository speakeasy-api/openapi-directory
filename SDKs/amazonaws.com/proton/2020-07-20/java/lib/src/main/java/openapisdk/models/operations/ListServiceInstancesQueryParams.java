package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public ListServiceInstancesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListServiceInstancesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}