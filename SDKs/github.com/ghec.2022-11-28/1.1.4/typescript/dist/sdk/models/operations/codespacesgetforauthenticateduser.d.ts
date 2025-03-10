import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesGetForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The name of the codespace.
     */
    codespaceName: string;
}
export declare class CodespacesGetForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    codespace?: shared.Codespace;
}
