package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorizeSnapshotAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccountWithRestoreAccess")
    public String accountWithRestoreAccess;
    public GetAuthorizeSnapshotAccessQueryParams withAccountWithRestoreAccess(String accountWithRestoreAccess) {
        this.accountWithRestoreAccess = accountWithRestoreAccess;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAuthorizeSnapshotAccessActionEnum action;
    public GetAuthorizeSnapshotAccessQueryParams withAction(GetAuthorizeSnapshotAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotClusterIdentifier")
    public String snapshotClusterIdentifier;
    public GetAuthorizeSnapshotAccessQueryParams withSnapshotClusterIdentifier(String snapshotClusterIdentifier) {
        this.snapshotClusterIdentifier = snapshotClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotIdentifier")
    public String snapshotIdentifier;
    public GetAuthorizeSnapshotAccessQueryParams withSnapshotIdentifier(String snapshotIdentifier) {
        this.snapshotIdentifier = snapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAuthorizeSnapshotAccessVersionEnum version;
    public GetAuthorizeSnapshotAccessQueryParams withVersion(GetAuthorizeSnapshotAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}