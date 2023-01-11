package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetIpAddressTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetIpAddressTypeActionEnum action;
    public PostSetIpAddressTypeQueryParams withAction(PostSetIpAddressTypeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetIpAddressTypeVersionEnum version;
    public PostSetIpAddressTypeQueryParams withVersion(PostSetIpAddressTypeVersionEnum version) {
        this.version = version;
        return this;
    }
}