package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListExecutionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListExecutionsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListExecutionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public ListExecutionsStateEnum state;
    public ListExecutionsQueryParams withState(ListExecutionsStateEnum state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taskId")
    public String taskId;
    public ListExecutionsQueryParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}