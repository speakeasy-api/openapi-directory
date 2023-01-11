package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListThingRegistrationTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListThingRegistrationTasksQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListThingRegistrationTasksQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public ListThingRegistrationTasksStatusEnum status;
    public ListThingRegistrationTasksQueryParams withStatus(ListThingRegistrationTasksStatusEnum status) {
        this.status = status;
        return this;
    }
}