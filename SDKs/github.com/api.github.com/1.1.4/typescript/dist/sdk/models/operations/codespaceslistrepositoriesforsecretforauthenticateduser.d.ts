import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesListRepositoriesForSecretForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The name of the secret.
     */
    secretName: string;
}
/**
 * Response
 */
export declare class CodespacesListRepositoriesForSecretForAuthenticatedUser200ApplicationJSON extends SpeakeasyBase {
    repositories: shared.MinimalRepository[];
    totalCount: number;
}
export declare class CodespacesListRepositoriesForSecretForAuthenticatedUserResponse extends SpeakeasyBase {
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
    codespacesListRepositoriesForSecretForAuthenticatedUser200ApplicationJSONObject?: CodespacesListRepositoriesForSecretForAuthenticatedUser200ApplicationJSON;
}
