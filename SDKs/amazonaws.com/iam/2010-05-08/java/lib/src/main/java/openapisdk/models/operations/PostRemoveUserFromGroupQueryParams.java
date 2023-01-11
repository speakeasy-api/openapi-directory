package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveUserFromGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRemoveUserFromGroupActionEnum action;
    public PostRemoveUserFromGroupQueryParams withAction(PostRemoveUserFromGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRemoveUserFromGroupVersionEnum version;
    public PostRemoveUserFromGroupQueryParams withVersion(PostRemoveUserFromGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}