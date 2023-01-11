package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssignIpv6AddressesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssignIpv6AddressesActionEnum action;
    public PostAssignIpv6AddressesQueryParams withAction(PostAssignIpv6AddressesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssignIpv6AddressesVersionEnum version;
    public PostAssignIpv6AddressesQueryParams withVersion(PostAssignIpv6AddressesVersionEnum version) {
        this.version = version;
        return this;
    }
}