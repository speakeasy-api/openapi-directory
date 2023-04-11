import { SpeakeasyBase } from "../../../internal/utils";
import { ShareStatusEnum } from "./sharestatusenum";
/**
 * A lens share summary return object.
 */
export declare class LensShareSummary extends SpeakeasyBase {
    /**
     * The ID associated with the workload share.
     */
    shareId?: string;
    /**
     * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.
     */
    sharedWith?: string;
    /**
     * The status of a workload share.
     */
    status?: ShareStatusEnum;
    statusMessage?: string;
}
