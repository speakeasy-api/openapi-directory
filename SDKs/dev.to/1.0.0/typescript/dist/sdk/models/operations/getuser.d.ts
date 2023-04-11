import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful
     */
    getUser200ApplicationJSONObject?: Record<string, any>;
}
