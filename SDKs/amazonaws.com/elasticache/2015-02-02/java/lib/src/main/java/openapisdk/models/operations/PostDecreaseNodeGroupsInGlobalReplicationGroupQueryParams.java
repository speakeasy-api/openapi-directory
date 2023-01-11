package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDecreaseNodeGroupsInGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDecreaseNodeGroupsInGlobalReplicationGroupActionEnum action;
    public PostDecreaseNodeGroupsInGlobalReplicationGroupQueryParams withAction(PostDecreaseNodeGroupsInGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum version;
    public PostDecreaseNodeGroupsInGlobalReplicationGroupQueryParams withVersion(PostDecreaseNodeGroupsInGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}