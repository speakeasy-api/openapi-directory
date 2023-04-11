import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CheckPublicDownloadSharePasswordRequest extends SpeakeasyBase {
    /**
     * Access key
     */
    accessKey: string;
    /**
     * Download share password
     */
    password?: string;
}
export declare class CheckPublicDownloadSharePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
