import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMediaDataBinarySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetMediaDataBinaryRequest extends SpeakeasyBase {
    /**
     * An id of a media resource
     */
    id: number;
}
export declare class GetMediaDataBinaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
