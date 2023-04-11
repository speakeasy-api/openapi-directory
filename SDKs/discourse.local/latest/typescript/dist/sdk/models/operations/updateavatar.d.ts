import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum UpdateAvatarRequestBodyTypeEnum {
    Uploaded = "uploaded",
    Custom = "custom",
    Gravatar = "gravatar",
    System = "system"
}
export declare class UpdateAvatarRequestBody extends SpeakeasyBase {
    type: UpdateAvatarRequestBodyTypeEnum;
    uploadId: number;
}
export declare class UpdateAvatarRequest extends SpeakeasyBase {
    requestBody?: UpdateAvatarRequestBody;
    username: string;
}
/**
 * avatar updated
 */
export declare class UpdateAvatar200ApplicationJSON extends SpeakeasyBase {
    success: string;
}
export declare class UpdateAvatarResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * avatar updated
     */
    updateAvatar200ApplicationJSONObject?: UpdateAvatar200ApplicationJSON;
}
