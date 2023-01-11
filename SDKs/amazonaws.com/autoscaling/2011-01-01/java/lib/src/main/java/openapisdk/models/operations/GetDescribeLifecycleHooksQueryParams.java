package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeLifecycleHooksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeLifecycleHooksActionEnum action;
    public GetDescribeLifecycleHooksQueryParams withAction(GetDescribeLifecycleHooksActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDescribeLifecycleHooksQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LifecycleHookNames")
    public String[] lifecycleHookNames;
    public GetDescribeLifecycleHooksQueryParams withLifecycleHookNames(String[] lifecycleHookNames) {
        this.lifecycleHookNames = lifecycleHookNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeLifecycleHooksVersionEnum version;
    public GetDescribeLifecycleHooksQueryParams withVersion(GetDescribeLifecycleHooksVersionEnum version) {
        this.version = version;
        return this;
    }
}