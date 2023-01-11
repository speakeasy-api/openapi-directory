package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveRoleFromDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRemoveRoleFromDbInstanceActionEnum action;
    public PostRemoveRoleFromDbInstanceQueryParams withAction(PostRemoveRoleFromDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRemoveRoleFromDbInstanceVersionEnum version;
    public PostRemoveRoleFromDbInstanceQueryParams withVersion(PostRemoveRoleFromDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}