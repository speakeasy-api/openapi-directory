package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListThingsInThingGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListThingsInThingGroupQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListThingsInThingGroupQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recursive")
    public Boolean recursive;
    public ListThingsInThingGroupQueryParams withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
}