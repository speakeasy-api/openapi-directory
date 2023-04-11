import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerAttributes } from "./customerattributes";
import { FirstAdminUser } from "./firstadminuser";
/**
 * Customer type
 */
export declare enum NewCustomerRequestCustomerContractTypeEnum {
    Demo = "demo",
    Free = "free",
    Pay = "pay"
}
/**
 * Request model for creating a customer
 */
export declare class NewCustomerRequest extends SpeakeasyBase {
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
     * Company name
     */
    companyName?: string;
    /**
     * List of customer attributes
     */
    customerAttributes?: CustomerAttributes;
    /**
     * Customer type
     */
    customerContractType: NewCustomerRequestCustomerContractTypeEnum;
    /**
     * First administrator user
     */
    firstAdminUser: FirstAdminUser;
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
    lockStatus?: boolean;
    /**
     * Provider customer ID
     */
    providerCustomerId?: string;
    /**
     * Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
     */
    quotaMax: number;
    /**
     * Number of days left for trial period (relevant only for type `demo`)
     *
     * @remarks
     *
     * (not used)
     */
    trialDays?: number;
    /**
     * Maximal number of users
     */
    userMax: number;
    /**
     * &#128640; Since v4.19.0
     *
     * @remarks
     *
     * Maximal number of webhooks
     */
    webhooksMax?: number;
}
