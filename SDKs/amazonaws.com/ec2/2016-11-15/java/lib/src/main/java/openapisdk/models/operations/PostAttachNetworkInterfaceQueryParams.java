package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachNetworkInterfaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAttachNetworkInterfaceActionEnum action;
    public PostAttachNetworkInterfaceQueryParams withAction(PostAttachNetworkInterfaceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAttachNetworkInterfaceVersionEnum version;
    public PostAttachNetworkInterfaceQueryParams withVersion(PostAttachNetworkInterfaceVersionEnum version) {
        this.version = version;
        return this;
    }
}