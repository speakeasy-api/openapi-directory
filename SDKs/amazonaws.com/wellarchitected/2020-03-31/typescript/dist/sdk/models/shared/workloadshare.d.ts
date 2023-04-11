import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";
import { ShareStatusEnum } from "./sharestatusenum";
/**
 * A workload share return object.
 */
export declare class WorkloadShare extends SpeakeasyBase {
    /**
     * Permission granted on a workload share.
     */
    permissionType?: PermissionTypeEnum;
    /**
     * The ID associated with the workload share.
     */
    shareId?: string;
    /**
     * An Amazon Web Services account ID.
     */
    sharedBy?: string;
    /**
     * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.
     */
    sharedWith?: string;
    /**
     * The status of a workload share.
     */
    status?: ShareStatusEnum;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
    /**
     * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
     */
    workloadName?: string;
}
