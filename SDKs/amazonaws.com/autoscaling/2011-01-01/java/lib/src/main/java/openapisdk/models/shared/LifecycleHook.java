package openapisdk.models.shared;



/**
 * LifecycleHook
 * Describes a lifecycle hook, which tells Amazon EC2 Auto Scaling that you want to perform an action whenever it launches instances or terminates instances.
**/
public class LifecycleHook {
    public String autoScalingGroupName;
    public LifecycleHook withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    public String defaultResult;
    public LifecycleHook withDefaultResult(String defaultResult) {
        this.defaultResult = defaultResult;
        return this;
    }
    public Long globalTimeout;
    public LifecycleHook withGlobalTimeout(Long globalTimeout) {
        this.globalTimeout = globalTimeout;
        return this;
    }
    public Long heartbeatTimeout;
    public LifecycleHook withHeartbeatTimeout(Long heartbeatTimeout) {
        this.heartbeatTimeout = heartbeatTimeout;
        return this;
    }
    public String lifecycleHookName;
    public LifecycleHook withLifecycleHookName(String lifecycleHookName) {
        this.lifecycleHookName = lifecycleHookName;
        return this;
    }
    public String lifecycleTransition;
    public LifecycleHook withLifecycleTransition(String lifecycleTransition) {
        this.lifecycleTransition = lifecycleTransition;
        return this;
    }
    public String notificationMetadata;
    public LifecycleHook withNotificationMetadata(String notificationMetadata) {
        this.notificationMetadata = notificationMetadata;
        return this;
    }
    public String notificationTargetARN;
    public LifecycleHook withNotificationTargetArn(String notificationTargetARN) {
        this.notificationTargetARN = notificationTargetARN;
        return this;
    }
    public String roleARN;
    public LifecycleHook withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}