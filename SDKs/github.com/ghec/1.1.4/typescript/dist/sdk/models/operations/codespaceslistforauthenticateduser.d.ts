import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesListForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * ID of the Repository to filter on
     */
    repositoryId?: number;
}
/**
 * Response
 */
export declare class CodespacesListForAuthenticatedUser200ApplicationJSON extends SpeakeasyBase {
    codespaces: shared.Codespace[];
    totalCount: number;
}
export declare class CodespacesListForAuthenticatedUserResponse extends SpeakeasyBase {
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
    codespacesListForAuthenticatedUser200ApplicationJSONObject?: CodespacesListForAuthenticatedUser200ApplicationJSON;
}
