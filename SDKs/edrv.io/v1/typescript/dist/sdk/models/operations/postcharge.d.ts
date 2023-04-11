import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PostChargeRequestBodyActionEnum {
    Start = "START",
    Stop = "STOP"
}
/**
 * Include command properties to send here
 */
export declare class PostChargeRequestBody extends SpeakeasyBase {
    action: PostChargeRequestBodyActionEnum;
}
export declare class PostChargeRequest extends SpeakeasyBase {
    /**
     * Include command properties to send here
     */
    requestBody: PostChargeRequestBody;
    /**
     * The vehicle id that needs to be fetched
     */
    id: string;
}
/**
 * Returns the status of the command
 */
export declare class PostCharge200ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PostChargeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the status of the command
     */
    postCharge200ApplicationJSONObject?: PostCharge200ApplicationJSON;
}
