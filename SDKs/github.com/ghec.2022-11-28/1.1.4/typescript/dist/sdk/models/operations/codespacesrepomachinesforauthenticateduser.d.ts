import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesRepoMachinesForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * IP for location auto-detection when proxying a request
     */
    clientIp?: string;
    /**
     * The location to check for available machines. Assigned by IP if not provided.
     */
    location?: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Response
 */
export declare class CodespacesRepoMachinesForAuthenticatedUser200ApplicationJSON extends SpeakeasyBase {
    machines: shared.CodespaceMachine[];
    totalCount: number;
}
export declare class CodespacesRepoMachinesForAuthenticatedUserResponse extends SpeakeasyBase {
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
    codespacesRepoMachinesForAuthenticatedUser200ApplicationJSONObject?: CodespacesRepoMachinesForAuthenticatedUser200ApplicationJSON;
}
