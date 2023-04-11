import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDetailsOfFileByIdSecurity extends SpeakeasyBase {
    connectToken: string;
}
export declare class GetDetailsOfFileByIdRequest extends SpeakeasyBase {
    /**
     * The UUID of the File to fetch
     */
    fileUuid: string;
    /**
     * Tells server to return the base64-encoded file contents in the response.
     */
    inlineFiles?: boolean;
    /**
     * The UUID of the Item to fetch File from
     */
    itemUuid: string;
    /**
     * The UUID of the Vault to fetch Item from
     */
    vaultUuid: string;
}
export declare class GetDetailsOfFileByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing token
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    file?: shared.File;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
