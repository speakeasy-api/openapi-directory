package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSnapshotScheduleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateSnapshotScheduleActionEnum action;
    public PostCreateSnapshotScheduleQueryParams withAction(PostCreateSnapshotScheduleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateSnapshotScheduleVersionEnum version;
    public PostCreateSnapshotScheduleQueryParams withVersion(PostCreateSnapshotScheduleVersionEnum version) {
        this.version = version;
        return this;
    }
}