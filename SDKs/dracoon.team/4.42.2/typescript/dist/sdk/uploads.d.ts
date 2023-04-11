import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * File upload without authentication headers
 */
export declare class Uploads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancel file upload
     *
     * @remarks
     * ### Description:
     * Cancel file upload.
     *
     * ### Precondition:
     * Valid upload token.
     *
     * ### Postcondition:
     * Upload canceled, token invalidated and all already transfered chunks removed.
     *
     * ### Further Information:
     * It is recommended to notify the API about cancelled uploads if possible.
     */
    cancelFileUploadByToken(req: operations.CancelFileUploadByTokenRequest, config?: AxiosRequestConfig): Promise<operations.CancelFileUploadByTokenResponse>;
    /**
     * Complete file upload
     *
     * @remarks
     * ### Description:
     * Finish uploading a file.
     *
     * ### Precondition:
     * Valid upload token.
     *
     * ### Postcondition:
     * File created.
     *
     * ### Further Information:
     * The provided file name might be changed in accordance with the resolution strategy:
     *
     * * **autorename**: changes the file name and adds a number to avoid conflicts.
     * * **overwrite**: deletes any old file with the same file name.
     * * **fail**: returns an error; in this case, another `PUT` request with a different file name may be sent.
     *
     * Please ensure that all chunks have been transferred correctly before finishing the upload.
     *
     * Download share id (if exists) gets changed if:
     * - node with the same name exists in the target container
     * - `resolutionStrategy` is `overwrite`
     * - `keepShareLinks` is `true`
     */
    completeFileUploadByToken(req: operations.CompleteFileUploadByTokenRequest, config?: AxiosRequestConfig): Promise<operations.CompleteFileUploadByTokenResponse>;
    /**
     * Upload file
     *
     * @remarks
     * ### Description:
     * Upload a (chunk of a) file.
     *
     * ### Precondition:
     * Valid upload token.
     *
     * ### Postcondition:
     * Chunk uploaded.
     *
     * ### Further Information:
     * Range requests are supported.
     *
     * Following `Content-Types` are supported by this API:
     * * `multipart/form-data`
     * * provided `Content-Type`
     *
     * For both file upload types set the correct `Content-Type` header and body.
     *
     * ### Examples:
     *
     * * `multipart/form-data`
     * ```
     * POST /api/v4/uploads/{token} HTTP/1.1
     *
     * Header:
     * ...
     * Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
     * ...
     *
     * Body:
     * ------WebKitFormBoundary7MA4YWxkTrZu0gW
     * Content-Disposition: form-data; name="file"; filename="file.txt"
     * Content-Type: text/plain
     *
     * Content of file.txt
     * ------WebKitFormBoundary7MA4YWxkTrZu0gW--
     * ```
     *
     * * any other `Content-Type`
     * ```
     * POST /api/v4/uploads/{token} HTTP/1.1
     *
     * Header:
     * ...
     * Content-Type: { ... }
     * ...
     *
     * Body:
     * raw content
     * ```
     *
     *
     * @see {@link https://tools.ietf.org/html/rfc7233} - Range Requests
     */
    uploadFileByTokenAsMultipart1(req: operations.UploadFileByTokenAsMultipart1Request, config?: AxiosRequestConfig): Promise<operations.UploadFileByTokenAsMultipart1Response>;
}
