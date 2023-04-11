import { SpeakeasyBase } from "../../../internal/utils";
export declare class ThreeDSAvailabilityRequest extends SpeakeasyBase {
    /**
     * This field contains additional data, which may be required for a particular request.
     *
     * @remarks
     *
     * The `additionalData` object consists of entries, each of which includes the key and value.
     */
    additionalData?: Record<string, string>;
    /**
     * List of brands.
     */
    brands?: string[];
    /**
     * Card number or BIN.
     */
    cardNumber?: string;
    /**
     * The merchant account identifier.
     */
    merchantAccount: string;
    /**
     * A recurring detail reference corresponding to a card.
     */
    recurringDetailReference?: string;
    /**
     * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
     */
    shopperReference?: string;
}
