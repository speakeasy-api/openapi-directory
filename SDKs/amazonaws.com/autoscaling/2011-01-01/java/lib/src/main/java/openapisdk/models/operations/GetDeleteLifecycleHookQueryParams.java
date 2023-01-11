package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteLifecycleHookQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteLifecycleHookActionEnum action;
    public GetDeleteLifecycleHookQueryParams withAction(GetDeleteLifecycleHookActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDeleteLifecycleHookQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LifecycleHookName")
    public String lifecycleHookName;
    public GetDeleteLifecycleHookQueryParams withLifecycleHookName(String lifecycleHookName) {
        this.lifecycleHookName = lifecycleHookName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteLifecycleHookVersionEnum version;
    public GetDeleteLifecycleHookQueryParams withVersion(GetDeleteLifecycleHookVersionEnum version) {
        this.version = version;
        return this;
    }
}