import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Customer type
 */
export declare enum UpdateCustomerRequestCustomerContractTypeEnum {
    Demo = "demo",
    Free = "free",
    Pay = "pay"
}
/**
 * Request model for updating a customer
 */
export declare class UpdateCustomerRequest extends SpeakeasyBase {
    /**
     * Company name
     */
    companyName?: string;
    /**
     * Customer type
     */
    customerContractType: UpdateCustomerRequestCustomerContractTypeEnum;
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
    quotaMax?: number;
    /**
     * Maximal number of users
     */
    userMax?: number;
    /**
     * &#128640; Since v4.19.0
     *
     * @remarks
     *
     * Maximal number of webhooks
     */
    webhooksMax?: number;
}
