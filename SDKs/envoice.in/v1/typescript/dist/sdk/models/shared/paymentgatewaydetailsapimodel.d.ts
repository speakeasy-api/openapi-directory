import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyApiModel } from "./currencyapimodel";
export declare class PaymentGatewayDetailsApiModel extends SpeakeasyBase {
    /**
     * Name of the payment gateway
     */
    name?: string;
    /**
     * List of supported currencies.
     */
    supportedCurrencies?: CurrencyApiModel[];
}
