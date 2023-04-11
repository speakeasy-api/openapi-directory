import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BalanceGetResponse extends SpeakeasyBase {
    /**
     * Internal Server Error
     */
    balanceGet500ApplicationJSONAny?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
