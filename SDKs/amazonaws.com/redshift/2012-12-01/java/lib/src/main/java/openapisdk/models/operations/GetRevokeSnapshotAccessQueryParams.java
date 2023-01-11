package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevokeSnapshotAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccountWithRestoreAccess")
    public String accountWithRestoreAccess;
    public GetRevokeSnapshotAccessQueryParams withAccountWithRestoreAccess(String accountWithRestoreAccess) {
        this.accountWithRestoreAccess = accountWithRestoreAccess;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRevokeSnapshotAccessActionEnum action;
    public GetRevokeSnapshotAccessQueryParams withAction(GetRevokeSnapshotAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotClusterIdentifier")
    public String snapshotClusterIdentifier;
    public GetRevokeSnapshotAccessQueryParams withSnapshotClusterIdentifier(String snapshotClusterIdentifier) {
        this.snapshotClusterIdentifier = snapshotClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotIdentifier")
    public String snapshotIdentifier;
    public GetRevokeSnapshotAccessQueryParams withSnapshotIdentifier(String snapshotIdentifier) {
        this.snapshotIdentifier = snapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRevokeSnapshotAccessVersionEnum version;
    public GetRevokeSnapshotAccessQueryParams withVersion(GetRevokeSnapshotAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}