import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesSetRepositoriesForSecretForAuthenticatedUserRequestBody extends SpeakeasyBase {
    /**
     * An array of repository ids for which a codespace can access the secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-a-user-secret), [Add a selected repository to a user secret](https://docs.github.com/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) endpoints.
     */
    selectedRepositoryIds: number[];
}
export declare class CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest extends SpeakeasyBase {
    requestBody: CodespacesSetRepositoriesForSecretForAuthenticatedUserRequestBody;
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class CodespacesSetRepositoriesForSecretForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
