import { SpeakeasyBase } from "../../../internal/utils";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetLabelEnum } from "./targetlabelenum";
import { TargetStatusEnum } from "./targetstatusenum";
/**
 *  A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform.
 */
export declare class InstanceTarget extends SpeakeasyBase {
    deploymentId?: string;
    instanceLabel?: TargetLabelEnum;
    lastUpdatedAt?: Date;
    lifecycleEvents?: LifecycleEvent[];
    status?: TargetStatusEnum;
    targetArn?: string;
    targetId?: string;
}
