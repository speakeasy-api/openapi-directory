import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TransactionsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TransactionsReadRequest extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    id: string;
    lineItem?: number;
    postedDate?: string;
    since?: string;
}
export declare class TransactionsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    lineItemTransaction?: shared.LineItemTransaction;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
