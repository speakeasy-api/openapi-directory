package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProfilingGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeDescription")
    public Boolean includeDescription;
    public ListProfilingGroupsQueryParams withIncludeDescription(Boolean includeDescription) {
        this.includeDescription = includeDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListProfilingGroupsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListProfilingGroupsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}