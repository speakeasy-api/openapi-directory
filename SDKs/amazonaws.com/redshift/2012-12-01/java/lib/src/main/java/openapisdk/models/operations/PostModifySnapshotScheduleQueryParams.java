package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifySnapshotScheduleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifySnapshotScheduleActionEnum action;
    public PostModifySnapshotScheduleQueryParams withAction(PostModifySnapshotScheduleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifySnapshotScheduleVersionEnum version;
    public PostModifySnapshotScheduleQueryParams withVersion(PostModifySnapshotScheduleVersionEnum version) {
        this.version = version;
        return this;
    }
}