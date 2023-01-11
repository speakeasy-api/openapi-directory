package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecordLifecycleActionHeartbeatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRecordLifecycleActionHeartbeatActionEnum action;
    public GetRecordLifecycleActionHeartbeatQueryParams withAction(GetRecordLifecycleActionHeartbeatActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetRecordLifecycleActionHeartbeatQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetRecordLifecycleActionHeartbeatQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LifecycleActionToken")
    public String lifecycleActionToken;
    public GetRecordLifecycleActionHeartbeatQueryParams withLifecycleActionToken(String lifecycleActionToken) {
        this.lifecycleActionToken = lifecycleActionToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LifecycleHookName")
    public String lifecycleHookName;
    public GetRecordLifecycleActionHeartbeatQueryParams withLifecycleHookName(String lifecycleHookName) {
        this.lifecycleHookName = lifecycleHookName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRecordLifecycleActionHeartbeatVersionEnum version;
    public GetRecordLifecycleActionHeartbeatQueryParams withVersion(GetRecordLifecycleActionHeartbeatVersionEnum version) {
        this.version = version;
        return this;
    }
}