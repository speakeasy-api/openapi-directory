package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRebalanceSlotsInGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRebalanceSlotsInGlobalReplicationGroupActionEnum action;
    public PostRebalanceSlotsInGlobalReplicationGroupQueryParams withAction(PostRebalanceSlotsInGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRebalanceSlotsInGlobalReplicationGroupVersionEnum version;
    public PostRebalanceSlotsInGlobalReplicationGroupQueryParams withVersion(PostRebalanceSlotsInGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}