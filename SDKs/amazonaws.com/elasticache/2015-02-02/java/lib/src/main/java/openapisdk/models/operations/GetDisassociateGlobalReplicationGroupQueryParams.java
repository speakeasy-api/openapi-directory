package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisassociateGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisassociateGlobalReplicationGroupActionEnum action;
    public GetDisassociateGlobalReplicationGroupQueryParams withAction(GetDisassociateGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalReplicationGroupId")
    public String globalReplicationGroupId;
    public GetDisassociateGlobalReplicationGroupQueryParams withGlobalReplicationGroupId(String globalReplicationGroupId) {
        this.globalReplicationGroupId = globalReplicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReplicationGroupId")
    public String replicationGroupId;
    public GetDisassociateGlobalReplicationGroupQueryParams withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReplicationGroupRegion")
    public String replicationGroupRegion;
    public GetDisassociateGlobalReplicationGroupQueryParams withReplicationGroupRegion(String replicationGroupRegion) {
        this.replicationGroupRegion = replicationGroupRegion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisassociateGlobalReplicationGroupVersionEnum version;
    public GetDisassociateGlobalReplicationGroupQueryParams withVersion(GetDisassociateGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}