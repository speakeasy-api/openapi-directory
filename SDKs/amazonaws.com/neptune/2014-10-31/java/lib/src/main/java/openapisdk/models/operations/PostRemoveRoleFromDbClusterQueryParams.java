package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveRoleFromDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRemoveRoleFromDbClusterActionEnum action;
    public PostRemoveRoleFromDbClusterQueryParams withAction(PostRemoveRoleFromDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRemoveRoleFromDbClusterVersionEnum version;
    public PostRemoveRoleFromDbClusterQueryParams withVersion(PostRemoveRoleFromDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}