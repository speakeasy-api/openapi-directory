import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealtimeRequest extends SpeakeasyBase {
    /**
     * The JWT token to use for auth
     */
    secWebsocketProtocol: string;
}
export declare class GetRealtimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
