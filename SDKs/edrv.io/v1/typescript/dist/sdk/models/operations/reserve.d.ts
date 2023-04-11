import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReserveRequestBody extends SpeakeasyBase {
    chargestation?: string;
    connector?: string;
    driver?: string;
    endDate?: string;
    token?: string;
}
/**
 * A successful response
 */
export declare class Reserve201ApplicationJSON extends SpeakeasyBase {
    command?: Record<string, any>;
    message?: string;
    ok?: boolean;
}
export declare class ReserveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response
     */
    reserve201ApplicationJSONObject?: Reserve201ApplicationJSON;
}
