import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Which type of organization repositories have access to the organization secret. `selected` means only the repositories specified by `selected_repository_ids` can access the secret.
 */
export declare enum CodespacesCreateOrUpdateOrgSecretRequestBodyVisibilityEnum {
    All = "all",
    Private = "private",
    Selected = "selected"
}
export declare class CodespacesCreateOrUpdateOrgSecretRequestBody extends SpeakeasyBase {
    /**
     * The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/reference/codespaces#get-an-organization-public-key) endpoint.
     */
    encryptedValue?: string;
    /**
     * The ID of the key you used to encrypt the secret.
     */
    keyId?: string;
    /**
     * An array of repository IDs that can access the organization secret. You can only provide a list of repository IDs when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/codespaces#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/codespaces#remove-selected-repository-from-an-organization-secret) endpoints.
     */
    selectedRepositoryIds?: number[];
    /**
     * Which type of organization repositories have access to the organization secret. `selected` means only the repositories specified by `selected_repository_ids` can access the secret.
     */
    visibility: CodespacesCreateOrUpdateOrgSecretRequestBodyVisibilityEnum;
}
export declare class CodespacesCreateOrUpdateOrgSecretRequest extends SpeakeasyBase {
    requestBody: CodespacesCreateOrUpdateOrgSecretRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class CodespacesCreateOrUpdateOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response when creating a secret
     */
    emptyObject?: Record<string, any>;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
