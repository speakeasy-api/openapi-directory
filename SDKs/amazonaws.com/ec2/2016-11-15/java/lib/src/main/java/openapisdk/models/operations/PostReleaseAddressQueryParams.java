package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReleaseAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostReleaseAddressActionEnum action;
    public PostReleaseAddressQueryParams withAction(PostReleaseAddressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostReleaseAddressVersionEnum version;
    public PostReleaseAddressQueryParams withVersion(PostReleaseAddressVersionEnum version) {
        this.version = version;
        return this;
    }
}