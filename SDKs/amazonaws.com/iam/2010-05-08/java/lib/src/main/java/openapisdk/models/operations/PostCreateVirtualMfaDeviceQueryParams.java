package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVirtualMfaDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateVirtualMfaDeviceActionEnum action;
    public PostCreateVirtualMfaDeviceQueryParams withAction(PostCreateVirtualMfaDeviceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateVirtualMfaDeviceVersionEnum version;
    public PostCreateVirtualMfaDeviceQueryParams withVersion(PostCreateVirtualMfaDeviceVersionEnum version) {
        this.version = version;
        return this;
    }
}