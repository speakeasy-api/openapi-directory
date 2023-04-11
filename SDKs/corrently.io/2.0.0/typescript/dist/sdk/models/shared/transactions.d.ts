import { SpeakeasyBase } from "../../../internal/utils";
export declare class Transactions extends SpeakeasyBase {
    /**
     * Pretty print of counter signing party
     */
    cashier?: string;
    /**
     * Cross signed timestamp of transaction
     */
    timeStamp?: number;
    /**
     * Unique hash of this transaction as provided by counter signing party
     */
    txid?: string;
    /**
     * Type of transaction per cashier implementation and schema
     */
    txtype?: string;
    /**
     * Amount covered by transaction
     */
    value?: number;
}
