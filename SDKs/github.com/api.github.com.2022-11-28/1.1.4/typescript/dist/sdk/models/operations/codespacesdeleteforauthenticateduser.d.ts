import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesDeleteForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The name of the codespace.
     */
    codespaceName: string;
}
export declare class CodespacesDeleteForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Accepted
     */
    codespacesDeleteForAuthenticatedUser202ApplicationJSONObject?: Record<string, any>;
}
