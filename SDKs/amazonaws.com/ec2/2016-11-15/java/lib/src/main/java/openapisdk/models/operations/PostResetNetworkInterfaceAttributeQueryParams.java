package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetNetworkInterfaceAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResetNetworkInterfaceAttributeActionEnum action;
    public PostResetNetworkInterfaceAttributeQueryParams withAction(PostResetNetworkInterfaceAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResetNetworkInterfaceAttributeVersionEnum version;
    public PostResetNetworkInterfaceAttributeQueryParams withVersion(PostResetNetworkInterfaceAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}