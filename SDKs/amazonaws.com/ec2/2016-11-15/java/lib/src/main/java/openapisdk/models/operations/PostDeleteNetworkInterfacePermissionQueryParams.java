package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNetworkInterfacePermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteNetworkInterfacePermissionActionEnum action;
    public PostDeleteNetworkInterfacePermissionQueryParams withAction(PostDeleteNetworkInterfacePermissionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteNetworkInterfacePermissionVersionEnum version;
    public PostDeleteNetworkInterfacePermissionQueryParams withVersion(PostDeleteNetworkInterfacePermissionVersionEnum version) {
        this.version = version;
        return this;
    }
}