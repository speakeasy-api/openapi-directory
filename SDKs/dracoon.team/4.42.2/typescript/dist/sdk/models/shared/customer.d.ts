import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerAttributes } from "./customerattributes";
/**
 * Customer type
 */
export declare enum CustomerCustomerContractTypeEnum {
    Demo = "demo",
    Free = "free",
    Pay = "pay"
}
/**
 * Customer information
 */
export declare class Customer extends SpeakeasyBase {
    /**
     * &#128679; Deprecated since v4.8.0
     *
     * @remarks
     *
     * Customer activation code string:
     *
     * * valid only for types `free` and `demo`
     *
     * * for `pay` customers it is empty
     */
    activationCode?: string;
    /**
     * Number of guest user accounts
     */
    cntGuestUser: number;
    /**
     * Number of internal user accounts
     */
    cntInternalUser: number;
    /**
     * Company name
     */
    companyName: string;
    /**
     * Creation date
     */
    createdAt: Date;
    /**
     * List of customer attributes
     */
    customerAttributes?: CustomerAttributes;
    /**
     * Customer type
     */
    customerContractType: CustomerCustomerContractTypeEnum;
    /**
     * &#128640; Since v4.21.0
     *
     * @remarks
     *
     * Customer UUID
     */
    customerUuid: string;
    /**
     * Unique identifier for the customer
     */
    id: number;
    /**
     * Customer is locked:
     *
     * @remarks
     *
     * * `false` - unlocked
     *
     * * `true` - locked
     *
     *
     *
     * All users of this customer will be blocked and can not login anymore.
     */
    isLocked?: boolean;
    /**
     * Date of last seen login for the customer
     */
    lastLoginAt?: Date;
    /**
     * &#128679; Deprecated since v4.7.0
     *
     * @remarks
     *
     * Customer lock status:
     *
     * * `false` - unlocked
     *
     * * `true` - locked
     *
     *
     *
     * Please use `isLocked` instead.
     *
     * All users of this customer will be blocked and can not login anymore.
     */
    lockStatus: boolean;
    /**
     * Provider customer ID
     */
    providerCustomerId?: string;
    /**
     * Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
     */
    quotaMax: number;
    /**
     * Used amount of disc space in bytes
     */
    quotaUsed: number;
    /**
     * Number of days left for trial period (relevant only for type `demo`)
     *
     * @remarks
     *
     * (not used)
     */
    trialDaysLeft?: number;
    /**
     * Modification date
     */
    updatedAt?: Date;
    /**
     * Maximal number of users
     */
    userMax: number;
    /**
     * Number of users which are already allocated.
     */
    userUsed: number;
    /**
     * &#128640; Since v4.19.0
     *
     * @remarks
     *
     * Maximal number of webhooks
     */
    webhooksMax?: number;
}
