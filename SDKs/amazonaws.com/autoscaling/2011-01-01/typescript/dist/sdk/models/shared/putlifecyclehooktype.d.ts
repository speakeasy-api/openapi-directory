import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutLifecycleHookType extends SpeakeasyBase {
    autoScalingGroupName: string;
    defaultResult?: string;
    heartbeatTimeout?: number;
    lifecycleHookName: string;
    lifecycleTransition?: string;
    notificationMetadata?: string;
    notificationTargetARN?: string;
    roleARN?: string;
}
