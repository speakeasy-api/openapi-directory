import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationExecutionStateEnum } from "./remediationexecutionstateenum";
import { RemediationExecutionStep } from "./remediationexecutionstep";
import { ResourceKey } from "./resourcekey";
/**
 * Provides details of the current status of the invoked remediation action for that resource.
 */
export declare class RemediationExecutionStatus extends SpeakeasyBase {
    invocationTime?: Date;
    lastUpdatedTime?: Date;
    /**
     * The details that identify a resource within Config, including the resource type and resource ID.
     */
    resourceKey?: ResourceKey;
    state?: RemediationExecutionStateEnum;
    stepDetails?: RemediationExecutionStep[];
}
