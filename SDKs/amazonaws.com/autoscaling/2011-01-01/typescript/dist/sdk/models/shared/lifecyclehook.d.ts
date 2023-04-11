import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a lifecycle hook. A lifecycle hook lets you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs.
 */
export declare class LifecycleHook extends SpeakeasyBase {
    autoScalingGroupName?: string;
    defaultResult?: string;
    globalTimeout?: number;
    heartbeatTimeout?: number;
    lifecycleHookName?: string;
    lifecycleTransition?: string;
    notificationMetadata?: string;
    notificationTargetARN?: string;
    roleARN?: string;
}
