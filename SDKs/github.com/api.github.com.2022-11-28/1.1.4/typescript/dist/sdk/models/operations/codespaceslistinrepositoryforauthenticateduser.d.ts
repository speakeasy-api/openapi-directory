import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesListInRepositoryForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Response
 */
export declare class CodespacesListInRepositoryForAuthenticatedUser200ApplicationJSON extends SpeakeasyBase {
    codespaces: shared.Codespace[];
    totalCount: number;
}
export declare class CodespacesListInRepositoryForAuthenticatedUserResponse extends SpeakeasyBase {
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
    codespacesListInRepositoryForAuthenticatedUser200ApplicationJSONObject?: CodespacesListInRepositoryForAuthenticatedUser200ApplicationJSON;
}
