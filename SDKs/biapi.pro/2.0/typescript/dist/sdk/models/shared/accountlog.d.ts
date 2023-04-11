import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountLog extends SpeakeasyBase {
    /**
     * Balanced recorded
     */
    balance: number;
    /**
     * Coming debit recorded
     */
    coming?: number;
    /**
     * If fail, contains the error code
     */
    error?: string;
    /**
     * If fail, error message received from bank or provider
     */
    errorMessage?: string;
    /**
     * ID of the log
     */
    id: number;
    /**
     * ID of the related account
     */
    idAccount: number;
    /**
     * ID of the related connection log
     */
    idConnectionLog?: number;
    /**
     * provider id
     */
    idConnector?: number;
    /**
     * Timestamp of log
     */
    timestamp: Date;
}
