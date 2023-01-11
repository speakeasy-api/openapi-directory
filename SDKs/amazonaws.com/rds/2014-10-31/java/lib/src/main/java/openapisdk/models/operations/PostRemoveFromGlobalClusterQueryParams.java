package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveFromGlobalClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRemoveFromGlobalClusterActionEnum action;
    public PostRemoveFromGlobalClusterQueryParams withAction(PostRemoveFromGlobalClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRemoveFromGlobalClusterVersionEnum version;
    public PostRemoveFromGlobalClusterQueryParams withVersion(PostRemoveFromGlobalClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}