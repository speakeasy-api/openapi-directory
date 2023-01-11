package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetIpAddressTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetIpAddressTypeActionEnum action;
    public GetSetIpAddressTypeQueryParams withAction(GetSetIpAddressTypeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IpAddressType")
    public GetSetIpAddressTypeIpAddressTypeEnum ipAddressType;
    public GetSetIpAddressTypeQueryParams withIpAddressType(GetSetIpAddressTypeIpAddressTypeEnum ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerArn")
    public String loadBalancerArn;
    public GetSetIpAddressTypeQueryParams withLoadBalancerArn(String loadBalancerArn) {
        this.loadBalancerArn = loadBalancerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetIpAddressTypeVersionEnum version;
    public GetSetIpAddressTypeQueryParams withVersion(GetSetIpAddressTypeVersionEnum version) {
        this.version = version;
        return this;
    }
}