package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStreamingSessionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdBy")
    public String createdBy;
    public ListStreamingSessionsQueryParams withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListStreamingSessionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ownedBy")
    public String ownedBy;
    public ListStreamingSessionsQueryParams withOwnedBy(String ownedBy) {
        this.ownedBy = ownedBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sessionIds")
    public String sessionIds;
    public ListStreamingSessionsQueryParams withSessionIds(String sessionIds) {
        this.sessionIds = sessionIds;
        return this;
    }
}