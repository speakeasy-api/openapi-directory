import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SendPasswordResetEmailRequestBody extends SpeakeasyBase {
    login: string;
}
/**
 * success response
 */
export declare class SendPasswordResetEmail200ApplicationJSON extends SpeakeasyBase {
    success: string;
    userFound: boolean;
}
export declare class SendPasswordResetEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    sendPasswordResetEmail200ApplicationJSONObject?: SendPasswordResetEmail200ApplicationJSON;
}
