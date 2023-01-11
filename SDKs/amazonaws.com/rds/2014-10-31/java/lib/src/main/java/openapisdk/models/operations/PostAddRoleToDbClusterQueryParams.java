package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddRoleToDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAddRoleToDbClusterActionEnum action;
    public PostAddRoleToDbClusterQueryParams withAction(PostAddRoleToDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAddRoleToDbClusterVersionEnum version;
    public PostAddRoleToDbClusterQueryParams withVersion(PostAddRoleToDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}