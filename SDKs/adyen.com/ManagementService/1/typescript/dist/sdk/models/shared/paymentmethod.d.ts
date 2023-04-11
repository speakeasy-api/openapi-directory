import { SpeakeasyBase } from "../../../internal/utils";
import { ApplePayInfo } from "./applepayinfo";
import { BcmcInfo } from "./bcmcinfo";
import { CartesBancairesInfo } from "./cartesbancairesinfo";
import { GiroPayInfo } from "./giropayinfo";
import { GooglePayInfo } from "./googlepayinfo";
import { KlarnaInfo } from "./klarnainfo";
import { MealVoucherFRInfo } from "./mealvoucherfrinfo";
import { PayPalInfo } from "./paypalinfo";
import { SofortInfo } from "./sofortinfo";
import { SwishInfo } from "./swishinfo";
import { VippsInfo } from "./vippsinfo";
/**
 * Payment method status. Possible values:
 *
 * @remarks
 * * **valid**
 * * **pending**
 * * **invalid**
 * * **rejected**
 */
export declare enum PaymentMethodVerificationStatusEnum {
    Valid = "valid",
    Pending = "pending",
    Invalid = "invalid",
    Rejected = "rejected"
}
/**
 * OK - the request has succeeded.
 */
export declare class PaymentMethod extends SpeakeasyBase {
    /**
     * Indicates whether receiving payments is allowed. This value is set to **true** by Adyen after screening your merchant account.
     */
    allowed?: boolean;
    applePay?: ApplePayInfo;
    bcmc?: BcmcInfo;
    /**
     * The unique identifier of the business line.
     */
    businessLineId?: string;
    cartesBancaires?: CartesBancairesInfo;
    /**
     * The list of countries where a payment method is available. By default, all countries supported by the payment method.
     */
    countries?: string[];
    /**
     * The list of currencies that a payment method supports. By default, all currencies supported by the payment method.
     */
    currencies?: string[];
    /**
     * The list of custom routing flags to route payment to the intended acquirer.
     */
    customRoutingFlags?: string[];
    /**
     * Indicates whether the payment method is enabled (**true**) or disabled (**false**).
     */
    enabled?: boolean;
    giroPay?: GiroPayInfo;
    googlePay?: GooglePayInfo;
    /**
     * The identifier of the resource.
     */
    id: string;
    klarna?: KlarnaInfo;
    mealVoucherFR?: MealVoucherFRInfo;
    paypal?: PayPalInfo;
    /**
     * Your reference for the payment method. Supported characters a-z, A-Z, 0-9.
     */
    reference?: string;
    /**
     * The sales channel.
     */
    shopperInteraction?: string;
    sofort?: SofortInfo;
    /**
     * The ID of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/stores__resParam_id), if any.
     */
    storeId?: string;
    swish?: SwishInfo;
    /**
     * Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
     */
    type?: string;
    /**
     * Payment method status. Possible values:
     *
     * @remarks
     * * **valid**
     * * **pending**
     * * **invalid**
     * * **rejected**
     */
    verificationStatus?: PaymentMethodVerificationStatusEnum;
    vipps?: VippsInfo;
}
