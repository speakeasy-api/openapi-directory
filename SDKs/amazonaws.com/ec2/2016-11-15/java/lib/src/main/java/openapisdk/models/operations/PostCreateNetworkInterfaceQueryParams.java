package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNetworkInterfaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateNetworkInterfaceActionEnum action;
    public PostCreateNetworkInterfaceQueryParams withAction(PostCreateNetworkInterfaceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateNetworkInterfaceVersionEnum version;
    public PostCreateNetworkInterfaceQueryParams withVersion(PostCreateNetworkInterfaceVersionEnum version) {
        this.version = version;
        return this;
    }
}