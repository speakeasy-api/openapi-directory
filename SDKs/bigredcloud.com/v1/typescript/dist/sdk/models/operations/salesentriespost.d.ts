import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SalesEntriesPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesEntriesPost200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
