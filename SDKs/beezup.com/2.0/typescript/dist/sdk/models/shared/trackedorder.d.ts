import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";
import { TrackedOrderProduct } from "./trackedorderproduct";
export declare class TrackedOrder extends SpeakeasyBase {
    /**
     * The basic info related to a channel
     */
    channel: BeezUPCommonChannelBasicInfo;
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
     * Indicate if the payment of this order has been validated or not
     */
    paymentValidated: boolean;
    /**
     * The product list of this order
     */
    products: TrackedOrderProduct[];
    /**
     * The total amount of the order
     */
    totalAmount: number;
    /**
     * The utc date of the order
     */
    utcDate: Date;
}
