package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNetworkInterfacePermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateNetworkInterfacePermissionActionEnum action;
    public PostCreateNetworkInterfacePermissionQueryParams withAction(PostCreateNetworkInterfacePermissionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateNetworkInterfacePermissionVersionEnum version;
    public PostCreateNetworkInterfacePermissionQueryParams withVersion(PostCreateNetworkInterfacePermissionVersionEnum version) {
        this.version = version;
        return this;
    }
}