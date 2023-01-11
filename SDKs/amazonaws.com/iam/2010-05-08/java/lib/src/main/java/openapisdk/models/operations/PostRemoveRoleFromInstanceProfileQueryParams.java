package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveRoleFromInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRemoveRoleFromInstanceProfileActionEnum action;
    public PostRemoveRoleFromInstanceProfileQueryParams withAction(PostRemoveRoleFromInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRemoveRoleFromInstanceProfileVersionEnum version;
    public PostRemoveRoleFromInstanceProfileQueryParams withVersion(PostRemoveRoleFromInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}