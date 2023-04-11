import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QueryDbRequest extends SpeakeasyBase {
    /**
     * Query (contact name, dns, domain etc)
     */
    query: string;
}
export declare class QueryDbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    queryDb200ApplicationJSONObject?: Record<string, any>;
}
