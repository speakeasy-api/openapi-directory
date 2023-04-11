import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesCreateOrUpdateSecretForAuthenticatedUserRequestBody extends SpeakeasyBase {
    /**
     * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get the public key for the authenticated user](https://docs.github.com/rest/reference/codespaces#get-the-public-key-for-the-authenticated-user) endpoint.
     */
    encryptedValue?: string;
    /**
     * ID of the key you used to encrypt the secret.
     */
    keyId: string;
    /**
     * An array of repository ids that can access the user secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-a-user-secret), [Set selected repositories for a user secret](https://docs.github.com/rest/reference/codespaces#set-selected-repositories-for-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) endpoints.
     */
    selectedRepositoryIds?: any[];
}
export declare class CodespacesCreateOrUpdateSecretForAuthenticatedUserRequest extends SpeakeasyBase {
    requestBody: CodespacesCreateOrUpdateSecretForAuthenticatedUserRequestBody;
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class CodespacesCreateOrUpdateSecretForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response after successfully creating a secret
     */
    emptyObject?: Record<string, any>;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
