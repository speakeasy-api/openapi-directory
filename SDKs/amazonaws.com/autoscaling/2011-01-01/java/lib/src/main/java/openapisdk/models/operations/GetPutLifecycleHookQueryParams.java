package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPutLifecycleHookQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPutLifecycleHookActionEnum action;
    public GetPutLifecycleHookQueryParams withAction(GetPutLifecycleHookActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetPutLifecycleHookQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DefaultResult")
    public String defaultResult;
    public GetPutLifecycleHookQueryParams withDefaultResult(String defaultResult) {
        this.defaultResult = defaultResult;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HeartbeatTimeout")
    public Long heartbeatTimeout;
    public GetPutLifecycleHookQueryParams withHeartbeatTimeout(Long heartbeatTimeout) {
        this.heartbeatTimeout = heartbeatTimeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LifecycleHookName")
    public String lifecycleHookName;
    public GetPutLifecycleHookQueryParams withLifecycleHookName(String lifecycleHookName) {
        this.lifecycleHookName = lifecycleHookName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LifecycleTransition")
    public String lifecycleTransition;
    public GetPutLifecycleHookQueryParams withLifecycleTransition(String lifecycleTransition) {
        this.lifecycleTransition = lifecycleTransition;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NotificationMetadata")
    public String notificationMetadata;
    public GetPutLifecycleHookQueryParams withNotificationMetadata(String notificationMetadata) {
        this.notificationMetadata = notificationMetadata;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NotificationTargetARN")
    public String notificationTargetARN;
    public GetPutLifecycleHookQueryParams withNotificationTargetArn(String notificationTargetARN) {
        this.notificationTargetARN = notificationTargetARN;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleARN")
    public String roleARN;
    public GetPutLifecycleHookQueryParams withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPutLifecycleHookVersionEnum version;
    public GetPutLifecycleHookQueryParams withVersion(GetPutLifecycleHookVersionEnum version) {
        this.version = version;
        return this;
    }
}