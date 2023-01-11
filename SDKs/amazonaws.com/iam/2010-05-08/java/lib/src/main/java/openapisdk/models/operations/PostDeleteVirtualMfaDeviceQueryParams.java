package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVirtualMfaDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteVirtualMfaDeviceActionEnum action;
    public PostDeleteVirtualMfaDeviceQueryParams withAction(PostDeleteVirtualMfaDeviceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteVirtualMfaDeviceVersionEnum version;
    public PostDeleteVirtualMfaDeviceQueryParams withVersion(PostDeleteVirtualMfaDeviceVersionEnum version) {
        this.version = version;
        return this;
    }
}