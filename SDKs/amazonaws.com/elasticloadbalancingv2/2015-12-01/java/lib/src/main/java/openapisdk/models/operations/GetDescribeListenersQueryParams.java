package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeListenersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeListenersActionEnum action;
    public GetDescribeListenersQueryParams withAction(GetDescribeListenersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ListenerArns")
    public String[] listenerArns;
    public GetDescribeListenersQueryParams withListenerArns(String[] listenerArns) {
        this.listenerArns = listenerArns;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerArn")
    public String loadBalancerArn;
    public GetDescribeListenersQueryParams withLoadBalancerArn(String loadBalancerArn) {
        this.loadBalancerArn = loadBalancerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeListenersQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public GetDescribeListenersQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeListenersVersionEnum version;
    public GetDescribeListenersQueryParams withVersion(GetDescribeListenersVersionEnum version) {
        this.version = version;
        return this;
    }
}