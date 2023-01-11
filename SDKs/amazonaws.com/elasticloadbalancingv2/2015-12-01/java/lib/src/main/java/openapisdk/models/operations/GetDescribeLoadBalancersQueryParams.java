package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeLoadBalancersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeLoadBalancersActionEnum action;
    public GetDescribeLoadBalancersQueryParams withAction(GetDescribeLoadBalancersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerArns")
    public String[] loadBalancerArns;
    public GetDescribeLoadBalancersQueryParams withLoadBalancerArns(String[] loadBalancerArns) {
        this.loadBalancerArns = loadBalancerArns;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeLoadBalancersQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Names")
    public String[] names;
    public GetDescribeLoadBalancersQueryParams withNames(String[] names) {
        this.names = names;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public GetDescribeLoadBalancersQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeLoadBalancersVersionEnum version;
    public GetDescribeLoadBalancersQueryParams withVersion(GetDescribeLoadBalancersVersionEnum version) {
        this.version = version;
        return this;
    }
}