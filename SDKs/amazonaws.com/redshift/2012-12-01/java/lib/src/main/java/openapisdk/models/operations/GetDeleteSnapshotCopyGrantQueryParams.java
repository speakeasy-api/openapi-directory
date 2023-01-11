package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteSnapshotCopyGrantQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteSnapshotCopyGrantActionEnum action;
    public GetDeleteSnapshotCopyGrantQueryParams withAction(GetDeleteSnapshotCopyGrantActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotCopyGrantName")
    public String snapshotCopyGrantName;
    public GetDeleteSnapshotCopyGrantQueryParams withSnapshotCopyGrantName(String snapshotCopyGrantName) {
        this.snapshotCopyGrantName = snapshotCopyGrantName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteSnapshotCopyGrantVersionEnum version;
    public GetDeleteSnapshotCopyGrantQueryParams withVersion(GetDeleteSnapshotCopyGrantVersionEnum version) {
        this.version = version;
        return this;
    }
}