package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostImportSnapshotActionEnum action;
    public PostImportSnapshotQueryParams withAction(PostImportSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostImportSnapshotVersionEnum version;
    public PostImportSnapshotQueryParams withVersion(PostImportSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}