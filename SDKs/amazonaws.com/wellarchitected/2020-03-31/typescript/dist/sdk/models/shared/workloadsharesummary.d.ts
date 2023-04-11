import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";
import { ShareStatusEnum } from "./sharestatusenum";
/**
 * A workload share summary return object.
 */
export declare class WorkloadShareSummary extends SpeakeasyBase {
    /**
     * Permission granted on a workload share.
     */
    permissionType?: PermissionTypeEnum;
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
