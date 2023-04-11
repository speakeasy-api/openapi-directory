import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const ConfirmsPlanting4ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmsPlanting4RequestBody extends SpeakeasyBase {
    /**
     * apikey_l1 (Like: d95fead6-e8a6-4247-9fb9-7835101a4560)
     */
    apiKeyL1: string;
    /**
     * apikey_l2 (Like: c60f8db5-7904-4227-960d-27400c38b166)
     */
    apiKeyL2: string;
    /**
     * Confirm Planting (Value = y/n)
     */
    confirmPlanting: string;
    /**
     * transaction_id
     */
    transactionId: string;
}
export declare class ConfirmsPlanting4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
