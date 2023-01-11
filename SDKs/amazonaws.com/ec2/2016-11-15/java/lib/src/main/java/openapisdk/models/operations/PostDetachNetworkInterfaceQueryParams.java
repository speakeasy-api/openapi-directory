package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachNetworkInterfaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDetachNetworkInterfaceActionEnum action;
    public PostDetachNetworkInterfaceQueryParams withAction(PostDetachNetworkInterfaceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDetachNetworkInterfaceVersionEnum version;
    public PostDetachNetworkInterfaceQueryParams withVersion(PostDetachNetworkInterfaceVersionEnum version) {
        this.version = version;
        return this;
    }
}