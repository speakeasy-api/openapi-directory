package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAllocateAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAllocateAddressActionEnum action;
    public PostAllocateAddressQueryParams withAction(PostAllocateAddressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAllocateAddressVersionEnum version;
    public PostAllocateAddressQueryParams withVersion(PostAllocateAddressVersionEnum version) {
        this.version = version;
        return this;
    }
}