import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DownloadAvatarRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
    /**
     * UUID of the avatar
     */
    uuid: string;
}
export declare class DownloadAvatarResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    downloadAvatar200ApplicationOctetStreamString?: string;
}
