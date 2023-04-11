import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesListDevcontainersInRepositoryForAuthenticatedUserRequest extends SpeakeasyBase {
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
export declare class CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ApplicationJSONDevcontainers extends SpeakeasyBase {
    name?: string;
    path: string;
}
/**
 * Response
 */
export declare class CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ApplicationJSON extends SpeakeasyBase {
    devcontainers: CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ApplicationJSONDevcontainers[];
    totalCount: number;
}
export declare class CodespacesListDevcontainersInRepositoryForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    codespacesListDevcontainersInRepositoryForAuthenticatedUser200ApplicationJSONObject?: CodespacesListDevcontainersInRepositoryForAuthenticatedUser200ApplicationJSON;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
}
