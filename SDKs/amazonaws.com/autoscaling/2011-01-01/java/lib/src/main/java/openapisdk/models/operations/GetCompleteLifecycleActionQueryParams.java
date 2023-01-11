package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCompleteLifecycleActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCompleteLifecycleActionActionEnum action;
    public GetCompleteLifecycleActionQueryParams withAction(GetCompleteLifecycleActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetCompleteLifecycleActionQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetCompleteLifecycleActionQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LifecycleActionResult")
    public String lifecycleActionResult;
    public GetCompleteLifecycleActionQueryParams withLifecycleActionResult(String lifecycleActionResult) {
        this.lifecycleActionResult = lifecycleActionResult;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LifecycleActionToken")
    public String lifecycleActionToken;
    public GetCompleteLifecycleActionQueryParams withLifecycleActionToken(String lifecycleActionToken) {
        this.lifecycleActionToken = lifecycleActionToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LifecycleHookName")
    public String lifecycleHookName;
    public GetCompleteLifecycleActionQueryParams withLifecycleHookName(String lifecycleHookName) {
        this.lifecycleHookName = lifecycleHookName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCompleteLifecycleActionVersionEnum version;
    public GetCompleteLifecycleActionQueryParams withVersion(GetCompleteLifecycleActionVersionEnum version) {
        this.version = version;
        return this;
    }
}