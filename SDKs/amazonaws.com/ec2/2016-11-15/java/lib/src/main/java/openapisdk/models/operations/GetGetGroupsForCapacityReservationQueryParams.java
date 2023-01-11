package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetGroupsForCapacityReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetGroupsForCapacityReservationActionEnum action;
    public GetGetGroupsForCapacityReservationQueryParams withAction(GetGetGroupsForCapacityReservationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CapacityReservationId")
    public String capacityReservationId;
    public GetGetGroupsForCapacityReservationQueryParams withCapacityReservationId(String capacityReservationId) {
        this.capacityReservationId = capacityReservationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetGroupsForCapacityReservationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public GetGetGroupsForCapacityReservationQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetGetGroupsForCapacityReservationQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetGroupsForCapacityReservationVersionEnum version;
    public GetGetGroupsForCapacityReservationQueryParams withVersion(GetGetGroupsForCapacityReservationVersionEnum version) {
        this.version = version;
        return this;
    }
}