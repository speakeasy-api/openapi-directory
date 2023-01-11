package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemovePermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRemovePermissionActionEnum action;
    public PostRemovePermissionQueryParams withAction(PostRemovePermissionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRemovePermissionVersionEnum version;
    public PostRemovePermissionQueryParams withVersion(PostRemovePermissionVersionEnum version) {
        this.version = version;
        return this;
    }
}