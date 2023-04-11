import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SilenceUserRequestBody extends SpeakeasyBase {
    /**
     * Will send an email with this message when present
     */
    message?: string;
    postAction?: string;
    reason?: string;
    silencedTill?: string;
}
export declare class SilenceUserRequest extends SpeakeasyBase {
    requestBody?: SilenceUserRequestBody;
    id: number;
}
export declare class SilenceUser200ApplicationJSONSilenceSilencedBy extends SpeakeasyBase {
    avatarTemplate: string;
    id: number;
    name: string;
    username: string;
}
export declare class SilenceUser200ApplicationJSONSilence extends SpeakeasyBase {
    silenceReason: string;
    silenced: boolean;
    silencedAt: string;
    silencedBy: SilenceUser200ApplicationJSONSilenceSilencedBy;
    silencedTill: string;
}
/**
 * response
 */
export declare class SilenceUser200ApplicationJSON extends SpeakeasyBase {
    silence: SilenceUser200ApplicationJSONSilence;
}
export declare class SilenceUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    silenceUser200ApplicationJSONObject?: SilenceUser200ApplicationJSON;
}
