package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeLoadBalancersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeLoadBalancersActionEnum action;
    public GetDescribeLoadBalancersQueryParams withAction(GetDescribeLoadBalancersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerNames")
    public String[] loadBalancerNames;
    public GetDescribeLoadBalancersQueryParams withLoadBalancerNames(String[] loadBalancerNames) {
        this.loadBalancerNames = loadBalancerNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeLoadBalancersQueryParams withMarker(String marker) {
        this.marker = marker;
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