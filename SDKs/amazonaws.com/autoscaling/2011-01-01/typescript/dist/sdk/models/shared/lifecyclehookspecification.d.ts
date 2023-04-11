import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes information used to specify a lifecycle hook for an Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export declare class LifecycleHookSpecification extends SpeakeasyBase {
    defaultResult?: string;
    heartbeatTimeout?: number;
    lifecycleHookName: string;
    lifecycleTransition: string;
    notificationMetadata?: string;
    notificationTargetARN?: string;
    roleARN?: string;
}
