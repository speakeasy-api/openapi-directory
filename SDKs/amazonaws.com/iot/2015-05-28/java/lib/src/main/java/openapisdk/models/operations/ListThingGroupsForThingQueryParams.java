package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListThingGroupsForThingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListThingGroupsForThingQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListThingGroupsForThingQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}