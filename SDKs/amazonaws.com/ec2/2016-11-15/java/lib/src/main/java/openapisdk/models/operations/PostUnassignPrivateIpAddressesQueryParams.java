package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUnassignPrivateIpAddressesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUnassignPrivateIpAddressesActionEnum action;
    public PostUnassignPrivateIpAddressesQueryParams withAction(PostUnassignPrivateIpAddressesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUnassignPrivateIpAddressesVersionEnum version;
    public PostUnassignPrivateIpAddressesQueryParams withVersion(PostUnassignPrivateIpAddressesVersionEnum version) {
        this.version = version;
        return this;
    }
}