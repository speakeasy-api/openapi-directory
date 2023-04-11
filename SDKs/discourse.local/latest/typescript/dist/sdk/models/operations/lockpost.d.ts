import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LockPostRequestBody extends SpeakeasyBase {
    locked: string;
}
export declare class LockPostRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    requestBody?: LockPostRequestBody;
    id: string;
}
/**
 * post updated
 */
export declare class LockPost200ApplicationJSON extends SpeakeasyBase {
    locked?: boolean;
}
export declare class LockPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * post updated
     */
    lockPost200ApplicationJSONObject?: LockPost200ApplicationJSON;
}
