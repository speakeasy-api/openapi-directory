import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadFileByIDSecurity extends SpeakeasyBase {
    connectToken: string;
}
export declare class DownloadFileByIDRequest extends SpeakeasyBase {
    /**
     * UUID of the file to get content from
     */
    fileUuid: string;
    /**
     * The UUID of the Item the File is in
     */
    itemUuid: string;
    /**
     * The UUID of the Vault the item is in
     */
    vaultUuid: string;
}
export declare class DownloadFileByIDResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    downloadFileByID200ApplicationOctetStreamBinaryString?: Uint8Array;
    /**
     * Invalid or missing token
     */
    errorResponse?: shared.ErrorResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
