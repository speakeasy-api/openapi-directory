package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetAddressAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResetAddressAttributeActionEnum action;
    public PostResetAddressAttributeQueryParams withAction(PostResetAddressAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResetAddressAttributeVersionEnum version;
    public PostResetAddressAttributeQueryParams withVersion(PostResetAddressAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}