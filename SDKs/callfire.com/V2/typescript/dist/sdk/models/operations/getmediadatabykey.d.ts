import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMediaDataByKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetMediaDataByKeyRequest extends SpeakeasyBase {
    /**
     * Media file type, available types: bmp, gif, jpg, m4a, mp3, mp4, png, wav
     */
    extension: string;
    /**
     * A hash-key of a media resource
     */
    key: string;
}
export declare class GetMediaDataByKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
