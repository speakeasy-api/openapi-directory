package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteGlobalReplicationGroupActionEnum action;
    public GetDeleteGlobalReplicationGroupQueryParams withAction(GetDeleteGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalReplicationGroupId")
    public String globalReplicationGroupId;
    public GetDeleteGlobalReplicationGroupQueryParams withGlobalReplicationGroupId(String globalReplicationGroupId) {
        this.globalReplicationGroupId = globalReplicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RetainPrimaryReplicationGroup")
    public Boolean retainPrimaryReplicationGroup;
    public GetDeleteGlobalReplicationGroupQueryParams withRetainPrimaryReplicationGroup(Boolean retainPrimaryReplicationGroup) {
        this.retainPrimaryReplicationGroup = retainPrimaryReplicationGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteGlobalReplicationGroupVersionEnum version;
    public GetDeleteGlobalReplicationGroupQueryParams withVersion(GetDeleteGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}