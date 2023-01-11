package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyNetworkInterfaceAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyNetworkInterfaceAttributeActionEnum action;
    public PostModifyNetworkInterfaceAttributeQueryParams withAction(PostModifyNetworkInterfaceAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyNetworkInterfaceAttributeVersionEnum version;
    public PostModifyNetworkInterfaceAttributeQueryParams withVersion(PostModifyNetworkInterfaceAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}