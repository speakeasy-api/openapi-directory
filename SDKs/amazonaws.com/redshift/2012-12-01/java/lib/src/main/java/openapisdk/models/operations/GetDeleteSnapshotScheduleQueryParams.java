package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteSnapshotScheduleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteSnapshotScheduleActionEnum action;
    public GetDeleteSnapshotScheduleQueryParams withAction(GetDeleteSnapshotScheduleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ScheduleIdentifier")
    public String scheduleIdentifier;
    public GetDeleteSnapshotScheduleQueryParams withScheduleIdentifier(String scheduleIdentifier) {
        this.scheduleIdentifier = scheduleIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteSnapshotScheduleVersionEnum version;
    public GetDeleteSnapshotScheduleQueryParams withVersion(GetDeleteSnapshotScheduleVersionEnum version) {
        this.version = version;
        return this;
    }
}