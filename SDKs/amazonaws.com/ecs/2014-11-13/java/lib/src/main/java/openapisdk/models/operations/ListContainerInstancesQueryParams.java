package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListContainerInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public String maxResults;
    public ListContainerInstancesQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListContainerInstancesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}