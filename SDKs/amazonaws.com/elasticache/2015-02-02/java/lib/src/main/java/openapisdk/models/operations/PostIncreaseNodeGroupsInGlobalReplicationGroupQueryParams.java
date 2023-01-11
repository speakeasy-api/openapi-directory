package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostIncreaseNodeGroupsInGlobalReplicationGroupActionEnum action;
    public PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams withAction(PostIncreaseNodeGroupsInGlobalReplicationGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum version;
    public PostIncreaseNodeGroupsInGlobalReplicationGroupQueryParams withVersion(PostIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}