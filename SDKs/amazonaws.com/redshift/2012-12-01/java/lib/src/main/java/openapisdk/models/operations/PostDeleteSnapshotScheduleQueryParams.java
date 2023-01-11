package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSnapshotScheduleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteSnapshotScheduleActionEnum action;
    public PostDeleteSnapshotScheduleQueryParams withAction(PostDeleteSnapshotScheduleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteSnapshotScheduleVersionEnum version;
    public PostDeleteSnapshotScheduleQueryParams withVersion(PostDeleteSnapshotScheduleVersionEnum version) {
        this.version = version;
        return this;
    }
}