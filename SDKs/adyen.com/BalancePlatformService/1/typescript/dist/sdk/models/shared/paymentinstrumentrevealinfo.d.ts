import { SpeakeasyBase } from "../../../internal/utils";
import { Expiry } from "./expiry";
/**
 * OK - the request has succeeded.
 */
export declare class PaymentInstrumentRevealInfo extends SpeakeasyBase {
    /**
     * The cvc of the card.
     */
    cvc: string;
    expiration: Expiry;
    /**
     * The pan number of the card.
     */
    pan: string;
}
