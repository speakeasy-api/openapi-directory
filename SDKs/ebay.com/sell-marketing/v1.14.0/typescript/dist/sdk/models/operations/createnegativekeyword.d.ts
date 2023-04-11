import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNegativeKeywordSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateNegativeKeywordResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    createNegativeKeyword201ApplicationJSONObject?: Record<string, any>;
}
