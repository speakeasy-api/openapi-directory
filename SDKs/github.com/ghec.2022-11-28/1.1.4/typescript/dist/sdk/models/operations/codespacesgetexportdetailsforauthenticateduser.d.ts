import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesGetExportDetailsForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The name of the codespace.
     */
    codespaceName: string;
    /**
     * The ID of the export operation, or `latest`. Currently only `latest` is currently supported.
     */
    exportId: string;
}
export declare class CodespacesGetExportDetailsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    codespaceExportDetails?: shared.CodespaceExportDetails;
}
