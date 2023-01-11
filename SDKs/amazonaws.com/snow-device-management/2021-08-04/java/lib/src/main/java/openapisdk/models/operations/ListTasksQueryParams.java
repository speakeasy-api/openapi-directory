package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListTasksQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListTasksQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public ListTasksStateEnum state;
    public ListTasksQueryParams withState(ListTasksStateEnum state) {
        this.state = state;
        return this;
    }
}