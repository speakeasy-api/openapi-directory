import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { FundingSource } from "./fundingsource";
import { TransferDetail } from "./transferdetail";
/**
 * This type is the base response type used by <code>TRANSFER</code> transaction type that is returned in the response.
 */
export declare class Transfer extends SpeakeasyBase {
    /**
     * This type provided details on the funding source for the transfer.
     */
    fundingSource?: FundingSource;
    /**
     * This timestamp indicates the date/time of the transfer. The following (UTC) format is used: <code>YYYY-MM-DDTHH:MM:SS.SSSZ</code>. For example, <code>2020-08-04T19:09:02.768Z</code>
     */
    transactionDate?: string;
    /**
     * This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
     */
    transferAmount?: Amount;
    /**
     * This type is used by the <b>transferDetail</b> container, which provides more details about the transfer and the charge(s) associated with the transfer.
     */
    transferDetail?: TransferDetail;
    /**
     * The unique identifier of the <code>TRANSFER</code> transaction type. This is the same value that was passed into the end of the call URI.
     */
    transferId?: string;
}
