import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PurchasesPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    purchasesPost200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
