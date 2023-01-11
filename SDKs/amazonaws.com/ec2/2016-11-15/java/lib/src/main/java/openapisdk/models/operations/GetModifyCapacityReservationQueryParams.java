package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyCapacityReservationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Accept")
    public Boolean accept;
    public GetModifyCapacityReservationQueryParams withAccept(Boolean accept) {
        this.accept = accept;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyCapacityReservationActionEnum action;
    public GetModifyCapacityReservationQueryParams withAction(GetModifyCapacityReservationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CapacityReservationId")
    public String capacityReservationId;
    public GetModifyCapacityReservationQueryParams withCapacityReservationId(String capacityReservationId) {
        this.capacityReservationId = capacityReservationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyCapacityReservationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDate")
    public OffsetDateTime endDate;
    public GetModifyCapacityReservationQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDateType")
    public GetModifyCapacityReservationEndDateTypeEnum endDateType;
    public GetModifyCapacityReservationQueryParams withEndDateType(GetModifyCapacityReservationEndDateTypeEnum endDateType) {
        this.endDateType = endDateType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceCount")
    public Long instanceCount;
    public GetModifyCapacityReservationQueryParams withInstanceCount(Long instanceCount) {
        this.instanceCount = instanceCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyCapacityReservationVersionEnum version;
    public GetModifyCapacityReservationQueryParams withVersion(GetModifyCapacityReservationVersionEnum version) {
        this.version = version;
        return this;
    }
}