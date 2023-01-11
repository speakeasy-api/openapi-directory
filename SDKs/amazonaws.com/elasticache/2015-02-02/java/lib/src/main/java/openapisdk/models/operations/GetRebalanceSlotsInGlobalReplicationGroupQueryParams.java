package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRebalanceSlotsInGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRebalanceSlotsInGlobalReplicationGroupActionEnum action;
    public GetRebalanceSlotsInGlobalReplicationGroupQueryParams withAction(GetRebalanceSlotsInGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplyImmediately")
    public Boolean applyImmediately;
    public GetRebalanceSlotsInGlobalReplicationGroupQueryParams withApplyImmediately(Boolean applyImmediately) {
        this.applyImmediately = applyImmediately;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalReplicationGroupId")
    public String globalReplicationGroupId;
    public GetRebalanceSlotsInGlobalReplicationGroupQueryParams withGlobalReplicationGroupId(String globalReplicationGroupId) {
        this.globalReplicationGroupId = globalReplicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRebalanceSlotsInGlobalReplicationGroupVersionEnum version;
    public GetRebalanceSlotsInGlobalReplicationGroupQueryParams withVersion(GetRebalanceSlotsInGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}