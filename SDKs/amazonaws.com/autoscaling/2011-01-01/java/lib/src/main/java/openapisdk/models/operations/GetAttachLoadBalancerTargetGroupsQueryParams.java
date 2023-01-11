package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachLoadBalancerTargetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAttachLoadBalancerTargetGroupsActionEnum action;
    public GetAttachLoadBalancerTargetGroupsQueryParams withAction(GetAttachLoadBalancerTargetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetAttachLoadBalancerTargetGroupsQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetGroupARNs")
    public String[] targetGroupARNs;
    public GetAttachLoadBalancerTargetGroupsQueryParams withTargetGroupArNs(String[] targetGroupARNs) {
        this.targetGroupARNs = targetGroupARNs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAttachLoadBalancerTargetGroupsVersionEnum version;
    public GetAttachLoadBalancerTargetGroupsQueryParams withVersion(GetAttachLoadBalancerTargetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}