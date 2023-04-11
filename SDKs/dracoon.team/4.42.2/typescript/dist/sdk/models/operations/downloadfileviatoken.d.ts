import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DownloadFileViaTokenRequest extends SpeakeasyBase {
    /**
     * Range
     *
     * @remarks
     *
     * e.g. `bytes=0-999`
     */
    range?: string;
    /**
     * Always return `application/octet-stream` instead of specific mimetype
     */
    genericMimetype?: boolean;
    /**
     * Use Content-Disposition: `inline` instead of `attachment`
     */
    inline?: boolean;
    /**
     * Download token
     */
    token: string;
}
export declare class DownloadFileViaTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
