package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetCapacityReservationUsageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetCapacityReservationUsageActionEnum action;
    public GetGetCapacityReservationUsageQueryParams withAction(GetGetCapacityReservationUsageActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CapacityReservationId")
    public String capacityReservationId;
    public GetGetCapacityReservationUsageQueryParams withCapacityReservationId(String capacityReservationId) {
        this.capacityReservationId = capacityReservationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetGetCapacityReservationUsageQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public GetGetCapacityReservationUsageQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetGetCapacityReservationUsageQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetCapacityReservationUsageVersionEnum version;
    public GetGetCapacityReservationUsageQueryParams withVersion(GetGetCapacityReservationUsageVersionEnum version) {
        this.version = version;
        return this;
    }
}