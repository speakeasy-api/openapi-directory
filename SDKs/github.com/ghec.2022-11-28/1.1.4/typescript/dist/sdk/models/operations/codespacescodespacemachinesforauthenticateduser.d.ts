import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesCodespaceMachinesForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The name of the codespace.
     */
    codespaceName: string;
}
/**
 * Response
 */
export declare class CodespacesCodespaceMachinesForAuthenticatedUser200ApplicationJSON extends SpeakeasyBase {
    machines: shared.CodespaceMachine[];
    totalCount: number;
}
export declare class CodespacesCodespaceMachinesForAuthenticatedUserResponse extends SpeakeasyBase {
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
    codespacesCodespaceMachinesForAuthenticatedUser200ApplicationJSONObject?: CodespacesCodespaceMachinesForAuthenticatedUser200ApplicationJSON;
}
