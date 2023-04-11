import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAuthTokenCode200ApplicationJSON extends SpeakeasyBase {
    /**
     * the reusability of a token (standard or single use)
     */
    access: string;
    /**
     * the temporary token
     */
    code: string;
    /**
     * duration in seconds of the token validity
     */
    expiresIn: number;
    /**
     * the token type
     */
    type: Record<string, any>;
}
export declare class GetAuthTokenCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getAuthTokenCode200ApplicationJSONObject?: GetAuthTokenCode200ApplicationJSON;
}
