package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCancelCapacityReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCancelCapacityReservationActionEnum action;
    public GetCancelCapacityReservationQueryParams withAction(GetCancelCapacityReservationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CapacityReservationId")
    public String capacityReservationId;
    public GetCancelCapacityReservationQueryParams withCapacityReservationId(String capacityReservationId) {
        this.capacityReservationId = capacityReservationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCancelCapacityReservationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCancelCapacityReservationVersionEnum version;
    public GetCancelCapacityReservationQueryParams withVersion(GetCancelCapacityReservationVersionEnum version) {
        this.version = version;
        return this;
    }
}