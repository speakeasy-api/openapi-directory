import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionTypeEnum } from "./permissiontypeenum";
import { ShareResourceTypeEnum } from "./shareresourcetypeenum";
/**
 * A share invitation summary return object.
 */
export declare class ShareInvitationSummary extends SpeakeasyBase {
    lensArn?: string;
    /**
     * The full name of the lens.
     */
    lensName?: string;
    /**
     * Permission granted on a workload share.
     */
    permissionType?: PermissionTypeEnum;
    shareInvitationId?: string;
    shareResourceType?: ShareResourceTypeEnum;
    /**
     * An Amazon Web Services account ID.
     */
    sharedBy?: string;
    /**
     * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.
     */
    sharedWith?: string;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
    /**
     * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
     */
    workloadName?: string;
}
