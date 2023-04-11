import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RefreshGravatarRequest extends SpeakeasyBase {
    username: string;
}
/**
 * response
 */
export declare class RefreshGravatar200ApplicationJSON extends SpeakeasyBase {
    gravatarAvatarTemplate: string;
    gravatarUploadId: number;
}
export declare class RefreshGravatarResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    refreshGravatar200ApplicationJSONObject?: RefreshGravatar200ApplicationJSON;
}
