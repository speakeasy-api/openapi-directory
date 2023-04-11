import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DownloadRequest extends SpeakeasyBase {
    /**
     * When downloading multiple files, this will be used as the name of the zip file that is created.
     */
    downloadArchiveName?: string;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * Path of file or folder to be downloaded, starting from the root. Can also be an array of paths.
     */
    resources: string[];
}
export declare class DownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Content of the file
     */
    download200ApplicationOctetStreamBinaryString?: Uint8Array;
    /**
     * Content of the file
     */
    download200ApplicationZipBinaryString?: Uint8Array;
}
