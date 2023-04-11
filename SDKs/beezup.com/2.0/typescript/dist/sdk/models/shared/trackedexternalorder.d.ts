import { SpeakeasyBase } from "../../../internal/utils";
import { TrackedExternalOrderProduct } from "./trackedexternalorderproduct";
export declare class TrackedExternalOrder extends SpeakeasyBase {
    /**
     * The currency code <a href="https://en.wikipedia.org/wiki/ISO_4217">(ISO 4217)</a>
     *
     * @remarks
     *
     */
    currencyCode: string;
    /**
     * The merchant order identifier
     */
    merchantOrderId: string;
    /**
     * Indicate if the payment of this external order has been validated or not
     */
    paymentValidated: boolean;
    /**
     * Can be null. The product list included in the external order
     */
    products?: TrackedExternalOrderProduct[];
    /**
     * The total amount of the external order
     */
    totalAmount: number;
    /**
     * The utc date of the external order
     */
    utcDate: Date;
    /**
     * Can be null. The visitor identifier of the external order
     */
    visitorId?: string;
}
