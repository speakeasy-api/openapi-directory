package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterSnapshotScheduleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyClusterSnapshotScheduleActionEnum action;
    public PostModifyClusterSnapshotScheduleQueryParams withAction(PostModifyClusterSnapshotScheduleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyClusterSnapshotScheduleVersionEnum version;
    public PostModifyClusterSnapshotScheduleQueryParams withVersion(PostModifyClusterSnapshotScheduleVersionEnum version) {
        this.version = version;
        return this;
    }
}