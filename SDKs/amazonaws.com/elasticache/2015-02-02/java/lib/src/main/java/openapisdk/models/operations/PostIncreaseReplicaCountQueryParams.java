package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostIncreaseReplicaCountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostIncreaseReplicaCountActionEnum action;
    public PostIncreaseReplicaCountQueryParams withAction(PostIncreaseReplicaCountActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostIncreaseReplicaCountVersionEnum version;
    public PostIncreaseReplicaCountQueryParams withVersion(PostIncreaseReplicaCountVersionEnum version) {
        this.version = version;
        return this;
    }
}