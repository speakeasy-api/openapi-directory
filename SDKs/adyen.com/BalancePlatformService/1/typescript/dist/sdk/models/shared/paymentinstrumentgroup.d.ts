import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class PaymentInstrumentGroup extends SpeakeasyBase {
    /**
     * The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the payment instrument group belongs.
     */
    balancePlatform: string;
    /**
     * Your description for the payment instrument group, maximum 300 characters.
     */
    description?: string;
    /**
     * The unique identifier of the payment instrument group.
     */
    id?: string;
    /**
     * Properties of the payment instrument group.
     */
    properties?: Record<string, string>;
    /**
     * Your reference for the payment instrument group, maximum 150 characters.
     */
    reference?: string;
    /**
     * The tx variant of the payment instrument group.
     */
    txVariant: string;
}
