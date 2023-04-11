import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ResetRequestBody extends SpeakeasyBase {
    chargestation?: string;
    type?: string;
}
/**
 * A successful response
 */
export declare class Reset201ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class ResetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response
     */
    reset201ApplicationJSONObject?: Reset201ApplicationJSON;
}
