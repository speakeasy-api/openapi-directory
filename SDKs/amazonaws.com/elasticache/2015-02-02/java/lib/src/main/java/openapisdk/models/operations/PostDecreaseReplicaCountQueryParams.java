package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDecreaseReplicaCountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDecreaseReplicaCountActionEnum action;
    public PostDecreaseReplicaCountQueryParams withAction(PostDecreaseReplicaCountActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDecreaseReplicaCountVersionEnum version;
    public PostDecreaseReplicaCountQueryParams withVersion(PostDecreaseReplicaCountVersionEnum version) {
        this.version = version;
        return this;
    }
}