import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class ApplePayInfo extends SpeakeasyBase {
    /**
     * The list of merchant domains. Maximum: 99 domains per request.
     *
     * @remarks
     *
     * For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/web-drop-in?tab=adyen-certificate-live_1#going-live).
     */
    domains?: string[];
}
