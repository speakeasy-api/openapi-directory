package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCompleteMigrationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCompleteMigrationActionEnum action;
    public GetCompleteMigrationQueryParams withAction(GetCompleteMigrationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Force")
    public Boolean force;
    public GetCompleteMigrationQueryParams withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReplicationGroupId")
    public String replicationGroupId;
    public GetCompleteMigrationQueryParams withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCompleteMigrationVersionEnum version;
    public GetCompleteMigrationQueryParams withVersion(GetCompleteMigrationVersionEnum version) {
        this.version = version;
        return this;
    }
}