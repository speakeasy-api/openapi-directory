package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNetworkInterfaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteNetworkInterfaceActionEnum action;
    public PostDeleteNetworkInterfaceQueryParams withAction(PostDeleteNetworkInterfaceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteNetworkInterfaceVersionEnum version;
    public PostDeleteNetworkInterfaceQueryParams withVersion(PostDeleteNetworkInterfaceVersionEnum version) {
        this.version = version;
        return this;
    }
}