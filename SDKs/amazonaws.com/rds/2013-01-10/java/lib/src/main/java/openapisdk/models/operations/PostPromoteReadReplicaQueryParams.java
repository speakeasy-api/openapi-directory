package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPromoteReadReplicaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPromoteReadReplicaActionEnum action;
    public PostPromoteReadReplicaQueryParams withAction(PostPromoteReadReplicaActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPromoteReadReplicaVersionEnum version;
    public PostPromoteReadReplicaQueryParams withVersion(PostPromoteReadReplicaVersionEnum version) {
        this.version = version;
        return this;
    }
}