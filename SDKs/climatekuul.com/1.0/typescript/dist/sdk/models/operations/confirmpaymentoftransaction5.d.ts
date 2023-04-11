import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const ConfirmPaymentOfTransaction5ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmPaymentOfTransaction5RequestBody extends SpeakeasyBase {
    /**
     * Confirm Payment Of Transaction (Value = y/n)
     */
    confirmTransaction: string;
    /**
     * transaction_id
     */
    transactionId: string;
}
export declare class ConfirmPaymentOfTransaction5Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
