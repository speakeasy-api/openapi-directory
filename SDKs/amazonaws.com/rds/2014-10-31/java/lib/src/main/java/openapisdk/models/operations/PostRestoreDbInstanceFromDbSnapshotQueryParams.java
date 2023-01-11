package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreDbInstanceFromDbSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRestoreDbInstanceFromDbSnapshotActionEnum action;
    public PostRestoreDbInstanceFromDbSnapshotQueryParams withAction(PostRestoreDbInstanceFromDbSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRestoreDbInstanceFromDbSnapshotVersionEnum version;
    public PostRestoreDbInstanceFromDbSnapshotQueryParams withVersion(PostRestoreDbInstanceFromDbSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}