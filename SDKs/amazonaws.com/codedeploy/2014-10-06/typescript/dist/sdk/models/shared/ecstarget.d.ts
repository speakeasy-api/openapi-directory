import { SpeakeasyBase } from "../../../internal/utils";
import { ECSTaskSet } from "./ecstaskset";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetStatusEnum } from "./targetstatusenum";
/**
 *  Information about the target of an Amazon ECS deployment.
 */
export declare class ECSTarget extends SpeakeasyBase {
    deploymentId?: string;
    lastUpdatedAt?: Date;
    lifecycleEvents?: LifecycleEvent[];
    status?: TargetStatusEnum;
    targetArn?: string;
    targetId?: string;
    taskSetsInfo?: ECSTaskSet[];
}
