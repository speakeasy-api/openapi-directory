package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCopyDbSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCopyDbSnapshotActionEnum action;
    public GetCopyDbSnapshotQueryParams withAction(GetCopyDbSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceDBSnapshotIdentifier")
    public String sourceDBSnapshotIdentifier;
    public GetCopyDbSnapshotQueryParams withSourceDbSnapshotIdentifier(String sourceDBSnapshotIdentifier) {
        this.sourceDBSnapshotIdentifier = sourceDBSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetDBSnapshotIdentifier")
    public String targetDBSnapshotIdentifier;
    public GetCopyDbSnapshotQueryParams withTargetDbSnapshotIdentifier(String targetDBSnapshotIdentifier) {
        this.targetDBSnapshotIdentifier = targetDBSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCopyDbSnapshotVersionEnum version;
    public GetCopyDbSnapshotQueryParams withVersion(GetCopyDbSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}