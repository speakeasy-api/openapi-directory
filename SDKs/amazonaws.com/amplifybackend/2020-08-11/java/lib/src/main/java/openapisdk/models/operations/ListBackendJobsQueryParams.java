package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBackendJobsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public ListBackendJobsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListBackendJobsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}