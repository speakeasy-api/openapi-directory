package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteReplicationGroupActionEnum action;
    public GetDeleteReplicationGroupQueryParams withAction(GetDeleteReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FinalSnapshotIdentifier")
    public String finalSnapshotIdentifier;
    public GetDeleteReplicationGroupQueryParams withFinalSnapshotIdentifier(String finalSnapshotIdentifier) {
        this.finalSnapshotIdentifier = finalSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReplicationGroupId")
    public String replicationGroupId;
    public GetDeleteReplicationGroupQueryParams withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RetainPrimaryCluster")
    public Boolean retainPrimaryCluster;
    public GetDeleteReplicationGroupQueryParams withRetainPrimaryCluster(Boolean retainPrimaryCluster) {
        this.retainPrimaryCluster = retainPrimaryCluster;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteReplicationGroupVersionEnum version;
    public GetDeleteReplicationGroupQueryParams withVersion(GetDeleteReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}