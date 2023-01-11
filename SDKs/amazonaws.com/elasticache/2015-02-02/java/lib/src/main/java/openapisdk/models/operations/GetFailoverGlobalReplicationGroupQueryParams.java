package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFailoverGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetFailoverGlobalReplicationGroupActionEnum action;
    public GetFailoverGlobalReplicationGroupQueryParams withAction(GetFailoverGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalReplicationGroupId")
    public String globalReplicationGroupId;
    public GetFailoverGlobalReplicationGroupQueryParams withGlobalReplicationGroupId(String globalReplicationGroupId) {
        this.globalReplicationGroupId = globalReplicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PrimaryRegion")
    public String primaryRegion;
    public GetFailoverGlobalReplicationGroupQueryParams withPrimaryRegion(String primaryRegion) {
        this.primaryRegion = primaryRegion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PrimaryReplicationGroupId")
    public String primaryReplicationGroupId;
    public GetFailoverGlobalReplicationGroupQueryParams withPrimaryReplicationGroupId(String primaryReplicationGroupId) {
        this.primaryReplicationGroupId = primaryReplicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetFailoverGlobalReplicationGroupVersionEnum version;
    public GetFailoverGlobalReplicationGroupQueryParams withVersion(GetFailoverGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}