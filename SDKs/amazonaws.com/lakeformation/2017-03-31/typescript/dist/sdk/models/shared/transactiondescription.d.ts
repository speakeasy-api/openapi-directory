import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionStatusEnum } from "./transactionstatusenum";
/**
 * A structure that contains information about a transaction.
 */
export declare class TransactionDescription extends SpeakeasyBase {
    transactionEndTime?: Date;
    transactionId?: string;
    transactionStartTime?: Date;
    transactionStatus?: TransactionStatusEnum;
}
