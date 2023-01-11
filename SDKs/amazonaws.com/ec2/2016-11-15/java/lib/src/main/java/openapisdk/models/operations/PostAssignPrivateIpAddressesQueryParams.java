package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssignPrivateIpAddressesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssignPrivateIpAddressesActionEnum action;
    public PostAssignPrivateIpAddressesQueryParams withAction(PostAssignPrivateIpAddressesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssignPrivateIpAddressesVersionEnum version;
    public PostAssignPrivateIpAddressesQueryParams withVersion(PostAssignPrivateIpAddressesVersionEnum version) {
        this.version = version;
        return this;
    }
}