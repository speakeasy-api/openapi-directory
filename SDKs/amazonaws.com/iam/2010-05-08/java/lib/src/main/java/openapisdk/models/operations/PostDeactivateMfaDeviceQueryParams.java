package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeactivateMfaDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeactivateMfaDeviceActionEnum action;
    public PostDeactivateMfaDeviceQueryParams withAction(PostDeactivateMfaDeviceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeactivateMfaDeviceVersionEnum version;
    public PostDeactivateMfaDeviceQueryParams withVersion(PostDeactivateMfaDeviceVersionEnum version) {
        this.version = version;
        return this;
    }
}