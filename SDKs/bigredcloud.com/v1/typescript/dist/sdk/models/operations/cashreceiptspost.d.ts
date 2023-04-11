import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CashReceiptsPostResponse extends SpeakeasyBase {
    /**
     * OK
     */
    cashReceiptsPost200ApplicationJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
