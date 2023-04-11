import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentInstrument } from "./paymentinstrument";
/**
 * OK - the request has succeeded.
 */
export declare class PaginatedPaymentInstrumentsResponse extends SpeakeasyBase {
    /**
     * Indicates whether there are more items on the next page.
     */
    hasNext: boolean;
    /**
     * Indicates whether there are more items on the previous page.
     */
    hasPrevious: boolean;
    /**
     * List of payment instruments associated with the balance account.
     */
    paymentInstruments: PaymentInstrument[];
}
