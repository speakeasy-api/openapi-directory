package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateGlobalReplicationGroupActionEnum action;
    public GetCreateGlobalReplicationGroupQueryParams withAction(GetCreateGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalReplicationGroupDescription")
    public String globalReplicationGroupDescription;
    public GetCreateGlobalReplicationGroupQueryParams withGlobalReplicationGroupDescription(String globalReplicationGroupDescription) {
        this.globalReplicationGroupDescription = globalReplicationGroupDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalReplicationGroupIdSuffix")
    public String globalReplicationGroupIdSuffix;
    public GetCreateGlobalReplicationGroupQueryParams withGlobalReplicationGroupIdSuffix(String globalReplicationGroupIdSuffix) {
        this.globalReplicationGroupIdSuffix = globalReplicationGroupIdSuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PrimaryReplicationGroupId")
    public String primaryReplicationGroupId;
    public GetCreateGlobalReplicationGroupQueryParams withPrimaryReplicationGroupId(String primaryReplicationGroupId) {
        this.primaryReplicationGroupId = primaryReplicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateGlobalReplicationGroupVersionEnum version;
    public GetCreateGlobalReplicationGroupQueryParams withVersion(GetCreateGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}