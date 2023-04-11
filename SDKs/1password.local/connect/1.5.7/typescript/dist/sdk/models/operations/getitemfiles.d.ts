import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetItemFilesSecurity extends SpeakeasyBase {
    connectToken: string;
}
export declare class GetItemFilesRequest extends SpeakeasyBase {
    /**
     * Tells server to return the base64-encoded file contents in the response.
     */
    inlineFiles?: boolean;
    /**
     * The UUID of the Item to fetch files from
     */
    itemUuid: string;
    /**
     * The UUID of the Vault to fetch Items from
     */
    vaultUuid: string;
}
export declare class GetItemFilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing token
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    files?: shared.File[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
