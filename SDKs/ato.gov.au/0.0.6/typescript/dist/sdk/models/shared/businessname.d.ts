import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The business name's lifecycle state.
 */
export declare enum BusinessNameLifecycleStateEnum {
    Approved = "Approved",
    Expired = "Expired",
    Issued = "Issued",
    PendingApproval = "Pending Approval",
    Suspended = "Suspended"
}
/**
 * The Business Name resource.
 */
export declare class BusinessNameInput extends SpeakeasyBase {
    /**
     * The business name's lifecycle state.
     */
    lifecycleState?: BusinessNameLifecycleStateEnum;
    /**
     * The business name.
     */
    name?: string;
}
/**
 * The Business Name resource.
 */
export declare class BusinessName extends SpeakeasyBase {
    /**
     * The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    fromDate?: Date;
    /**
     * The resource's unique identifier.
     */
    id?: string;
    /**
     * The business name's lifecycle state.
     */
    lifecycleState?: BusinessNameLifecycleStateEnum;
    /**
     * The business name.
     */
    name?: string;
    /**
     * The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    toDate?: Date;
}
