import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMediaDataSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetMediaDataRequest extends SpeakeasyBase {
    /**
     * Media file type. Available types: bmp, gif, jpg, m4a, mp3, mp4, png, wav
     */
    extension: string;
    /**
     * An id of a media resource
     */
    id: number;
}
export declare class GetMediaDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
