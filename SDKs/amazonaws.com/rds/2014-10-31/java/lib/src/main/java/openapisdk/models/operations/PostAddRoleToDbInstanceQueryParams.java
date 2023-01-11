package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddRoleToDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAddRoleToDbInstanceActionEnum action;
    public PostAddRoleToDbInstanceQueryParams withAction(PostAddRoleToDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAddRoleToDbInstanceVersionEnum version;
    public PostAddRoleToDbInstanceQueryParams withVersion(PostAddRoleToDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}