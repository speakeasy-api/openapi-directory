import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnonymizeUserRequest extends SpeakeasyBase {
    id: number;
}
/**
 * response
 */
export declare class AnonymizeUser200ApplicationJSON extends SpeakeasyBase {
    success: string;
    username: string;
}
export declare class AnonymizeUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    anonymizeUser200ApplicationJSONObject?: AnonymizeUser200ApplicationJSON;
}
