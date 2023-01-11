package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetGroupsForCapacityReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetGroupsForCapacityReservationActionEnum action;
    public PostGetGroupsForCapacityReservationQueryParams withAction(PostGetGroupsForCapacityReservationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public PostGetGroupsForCapacityReservationQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostGetGroupsForCapacityReservationQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetGroupsForCapacityReservationVersionEnum version;
    public PostGetGroupsForCapacityReservationQueryParams withVersion(PostGetGroupsForCapacityReservationVersionEnum version) {
        this.version = version;
        return this;
    }
}