package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableMfaDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostEnableMfaDeviceActionEnum action;
    public PostEnableMfaDeviceQueryParams withAction(PostEnableMfaDeviceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostEnableMfaDeviceVersionEnum version;
    public PostEnableMfaDeviceQueryParams withVersion(PostEnableMfaDeviceVersionEnum version) {
        this.version = version;
        return this;
    }
}