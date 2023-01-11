package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeTargetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeTargetGroupsActionEnum action;
    public GetDescribeTargetGroupsQueryParams withAction(GetDescribeTargetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerArn")
    public String loadBalancerArn;
    public GetDescribeTargetGroupsQueryParams withLoadBalancerArn(String loadBalancerArn) {
        this.loadBalancerArn = loadBalancerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeTargetGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Names")
    public String[] names;
    public GetDescribeTargetGroupsQueryParams withNames(String[] names) {
        this.names = names;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public GetDescribeTargetGroupsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetGroupArns")
    public String[] targetGroupArns;
    public GetDescribeTargetGroupsQueryParams withTargetGroupArns(String[] targetGroupArns) {
        this.targetGroupArns = targetGroupArns;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeTargetGroupsVersionEnum version;
    public GetDescribeTargetGroupsQueryParams withVersion(GetDescribeTargetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}