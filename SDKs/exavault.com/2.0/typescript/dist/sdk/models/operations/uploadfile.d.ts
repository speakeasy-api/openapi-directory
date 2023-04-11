import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadFileRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UploadFileRequestBody extends SpeakeasyBase {
    file?: UploadFileRequestBodyFile;
}
export declare class UploadFileRequest extends SpeakeasyBase {
    requestBody?: UploadFileRequestBody;
    /**
     * True if a file with the same name is found in the designated path, should be overwritten. False if different file names should be generated.
     */
    allowOverwrite?: boolean;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * File size, in bits, of the file being uploaded.
     */
    fileSize: number;
    /**
     * Allows a file upload to resume at a certain number of bytes.
     */
    offsetBytes?: number;
    /**
     * Destination path for the file being uploaded, including the file name.
     */
    path: string;
    /**
     * True if upload resume is supported, false if it isn't.
     *
     * @remarks
     *
     */
    resume?: boolean;
}
export declare class UploadFileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    resourceResponse?: shared.ResourceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
