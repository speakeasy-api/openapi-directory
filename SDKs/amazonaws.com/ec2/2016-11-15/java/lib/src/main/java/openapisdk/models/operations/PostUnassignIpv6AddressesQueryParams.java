package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUnassignIpv6AddressesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUnassignIpv6AddressesActionEnum action;
    public PostUnassignIpv6AddressesQueryParams withAction(PostUnassignIpv6AddressesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUnassignIpv6AddressesVersionEnum version;
    public PostUnassignIpv6AddressesQueryParams withVersion(PostUnassignIpv6AddressesVersionEnum version) {
        this.version = version;
        return this;
    }
}