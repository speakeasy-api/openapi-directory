import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetInvoicingRequest extends SpeakeasyBase {
    /**
     * the number of accounts synchronized during the period
     */
    accountsSynced?: string;
    /**
     * get all the invoicing data at once
     */
    all?: string;
    /**
     * the number of Bank API connections synchronized during the period
     */
    connectionsAccount?: string;
    /**
     * the number of connections synchronized during the period
     */
    connectionsSynced?: string;
    /**
     * get full ids list instead of numbers
     */
    detail?: string;
    /**
     * maximum date
     */
    maxDate?: Date;
    /**
     * minimal date
     */
    minDate?: Date;
    /**
     * the number of payments done during the period
     */
    paymentsSynced?: string;
    /**
     * the number of subscriptions synchronized during the period
     */
    subscriptionsSynced?: string;
    /**
     * the number of transfers done during the period
     */
    transfersSynced?: string;
    /**
     * the number of user of the Bank API synchronized during the period
     */
    usersBank?: string;
    /**
     *  the number of user of the Bill API synchronized during the period
     */
    usersBill?: string;
    /**
     * the number of user synchronized during the period
     */
    usersSynced?: string;
}
export declare class GetInvoicingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
