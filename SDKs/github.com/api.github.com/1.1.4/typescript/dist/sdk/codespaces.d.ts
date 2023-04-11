import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints to manage Codespaces using the REST API.
 */
export declare class Codespaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a selected repository to a user secret
     *
     * @remarks
     * Adds a repository to the selected repositories for a user's codespace secret.
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     * GitHub Apps must have write access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on the referenced repository to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret} - API method documentation
     */
    codespacesAddRepositoryForSecretForAuthenticatedUser(req: operations.CodespacesAddRepositoryForSecretForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesAddRepositoryForSecretForAuthenticatedUserResponse>;
    /**
     * Add selected repository to an organization secret
     *
     * @remarks
     * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/codespaces#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#add-selected-repository-to-an-organization-secret} - API method documentation
     */
    codespacesAddSelectedRepoToOrgSecret(req: operations.CodespacesAddSelectedRepoToOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesAddSelectedRepoToOrgSecretResponse>;
    /**
     * List machine types for a codespace
     *
     * @remarks
     * List the machine types a codespace can transition to use.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_metadata` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#list-machine-types-for-a-codespace} - API method documentation
     */
    codespacesCodespaceMachinesForAuthenticatedUser(req: operations.CodespacesCodespaceMachinesForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesCodespaceMachinesForAuthenticatedUserResponse>;
    /**
     * Create a codespace for the authenticated user
     *
     * @remarks
     * Creates a new codespace, owned by the authenticated user.
     *
     * This endpoint requires either a `repository_id` OR a `pull_request` but not both.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#create-a-codespace-for-the-authenticated-user} - API method documentation
     */
    codespacesCreateForAuthenticatedUser(req: any, config?: AxiosRequestConfig): Promise<operations.CodespacesCreateForAuthenticatedUserResponse>;
    /**
     * Create or update an organization secret
     *
     * @remarks
     * Creates or updates an organization secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
     * token with the `admin:org` scope to use this endpoint.
     *
     * #### Example encrypting a secret using Node.js
     *
     * Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.
     *
     * ```
     * const sodium = require('libsodium-wrappers')
     * const secret = 'plain-text-secret' // replace with the secret you want to encrypt
     * const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key
     *
     * //Check if libsodium is ready and then proceed.
     * sodium.ready.then(() => {
     *   // Convert Secret & Base64 key to Uint8Array.
     *   let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
     *   let binsec = sodium.from_string(secret)
     *
     *   //Encrypt the secret using LibSodium
     *   let encBytes = sodium.crypto_box_seal(binsec, binkey)
     *
     *   // Convert encrypted Uint8Array to Base64
     *   let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)
     *
     *   console.log(output)
     * });
     * ```
     *
     * #### Example encrypting a secret using Python
     *
     * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
     *
     * ```
     * from base64 import b64encode
     * from nacl import encoding, public
     *
     * def encrypt(public_key: str, secret_value: str) -> str:
     *   """Encrypt a Unicode string using the public key."""
     *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
     *   sealed_box = public.SealedBox(public_key)
     *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
     *   return b64encode(encrypted).decode("utf-8")
     * ```
     *
     * #### Example encrypting a secret using C#
     *
     * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
     *
     * ```
     * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
     * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
     *
     * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
     *
     * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
     * ```
     *
     * #### Example encrypting a secret using Ruby
     *
     * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
     *
     * ```ruby
     * require "rbnacl"
     * require "base64"
     *
     * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
     * public_key = RbNaCl::PublicKey.new(key)
     *
     * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
     * encrypted_secret = box.encrypt("my_secret")
     *
     * # Print the base64 encoded secret
     * puts Base64.strict_encode64(encrypted_secret)
     * ```
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#create-or-update-an-organization-secret} - API method documentation
     */
    codespacesCreateOrUpdateOrgSecret(req: operations.CodespacesCreateOrUpdateOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesCreateOrUpdateOrgSecretResponse>;
    /**
     * Create or update a repository secret
     *
     * @remarks
     * Creates or updates a repository secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
     * token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets`
     * repository permission to use this endpoint.
     *
     * #### Example of encrypting a secret using Node.js
     *
     * Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.
     *
     * ```
     * const sodium = require('libsodium-wrappers')
     * const secret = 'plain-text-secret' // replace with the secret you want to encrypt
     * const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key
     *
     * //Check if libsodium is ready and then proceed.
     * sodium.ready.then(() => {
     *   // Convert Secret & Base64 key to Uint8Array.
     *   let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
     *   let binsec = sodium.from_string(secret)
     *
     *   //Encrypt the secret using LibSodium
     *   let encBytes = sodium.crypto_box_seal(binsec, binkey)
     *
     *   // Convert encrypted Uint8Array to Base64
     *   let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)
     *
     *   console.log(output)
     * });
     * ```
     *
     * #### Example of encrypting a secret using Python
     *
     * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
     *
     * ```
     * from base64 import b64encode
     * from nacl import encoding, public
     *
     * def encrypt(public_key: str, secret_value: str) -> str:
     *   """Encrypt a Unicode string using the public key."""
     *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
     *   sealed_box = public.SealedBox(public_key)
     *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
     *   return b64encode(encrypted).decode("utf-8")
     * ```
     *
     * #### Example of encrypting a secret using C#
     *
     * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
     *
     * ```
     * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
     * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
     *
     * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
     *
     * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
     * ```
     *
     * #### Example of encrypting a secret using Ruby
     *
     * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
     *
     * ```ruby
     * require "rbnacl"
     * require "base64"
     *
     * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
     * public_key = RbNaCl::PublicKey.new(key)
     *
     * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
     * encrypted_secret = box.encrypt("my_secret")
     *
     * # Print the base64 encoded secret
     * puts Base64.strict_encode64(encrypted_secret)
     * ```
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#create-or-update-a-repository-secret} - API method documentation
     */
    codespacesCreateOrUpdateRepoSecret(req: operations.CodespacesCreateOrUpdateRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesCreateOrUpdateRepoSecretResponse>;
    /**
     * Create or update a secret for the authenticated user
     *
     * @remarks
     * Creates or updates a secret for a user's codespace with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages).
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must also have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_user_secrets` user permission and `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.
     *
     * #### Example encrypting a secret using Node.js
     *
     * Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.
     *
     * ```
     * const sodium = require('libsodium-wrappers')
     * const secret = 'plain-text-secret' // replace with the secret you want to encrypt
     * const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key
     *
     * //Check if libsodium is ready and then proceed.
     * sodium.ready.then(() => {
     *   // Convert Secret & Base64 key to Uint8Array.
     *   let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
     *   let binsec = sodium.from_string(secret)
     *
     *   //Encrypt the secret using LibSodium
     *   let encBytes = sodium.crypto_box_seal(binsec, binkey)
     *
     *   // Convert encrypted Uint8Array to Base64
     *   let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)
     *
     *   console.log(output)
     * });
     * ```
     *
     * #### Example encrypting a secret using Python
     *
     * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
     *
     * ```
     * from base64 import b64encode
     * from nacl import encoding, public
     *
     * def encrypt(public_key: str, secret_value: str) -> str:
     *   """Encrypt a Unicode string using the public key."""
     *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
     *   sealed_box = public.SealedBox(public_key)
     *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
     *   return b64encode(encrypted).decode("utf-8")
     * ```
     *
     * #### Example encrypting a secret using C#
     *
     * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
     *
     * ```
     * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
     * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
     *
     * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
     *
     * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
     * ```
     *
     * #### Example encrypting a secret using Ruby
     *
     * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
     *
     * ```ruby
     * require "rbnacl"
     * require "base64"
     *
     * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
     * public_key = RbNaCl::PublicKey.new(key)
     *
     * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
     * encrypted_secret = box.encrypt("my_secret")
     *
     * # Print the base64 encoded secret
     * puts Base64.strict_encode64(encrypted_secret)
     * ```
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#create-or-update-a-secret-for-the-authenticated-user} - API method documentation
     */
    codespacesCreateOrUpdateSecretForAuthenticatedUser(req: operations.CodespacesCreateOrUpdateSecretForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesCreateOrUpdateSecretForAuthenticatedUserResponse>;
    /**
     * Create a codespace from a pull request
     *
     * @remarks
     * Creates a codespace owned by the authenticated user for the specified pull request.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#create-a-codespace-from-a-pull-request} - API method documentation
     */
    codespacesCreateWithPrForAuthenticatedUser(req: operations.CodespacesCreateWithPrForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesCreateWithPrForAuthenticatedUserResponse>;
    /**
     * Create a codespace in a repository
     *
     * @remarks
     * Creates a codespace owned by the authenticated user in the specified repository.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#create-a-codespace-in-a-repository} - API method documentation
     */
    codespacesCreateWithRepoForAuthenticatedUser(req: operations.CodespacesCreateWithRepoForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesCreateWithRepoForAuthenticatedUserResponse>;
    /**
     * Removes users from Codespaces billing for an organization
     *
     * @remarks
     * Codespaces for the specified users will no longer be billed to the organization.
     * To use this endpoint, the billing settings for the organization must be set to `selected_members`. For information on how to change this setting please see [these docs].(https://docs.github.com/rest/codespaces/organizations#manage-access-control-for-organization-codespaces) You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#delete-codespaces-billing-users} - API method documentation
     */
    codespacesDeleteCodespacesBillingUsers(req: operations.CodespacesDeleteCodespacesBillingUsersRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesDeleteCodespacesBillingUsersResponse>;
    /**
     * Delete a codespace for the authenticated user
     *
     * @remarks
     * Deletes a user's codespace.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#delete-a-codespace-for-the-authenticated-user} - API method documentation
     */
    codespacesDeleteForAuthenticatedUser(req: operations.CodespacesDeleteForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesDeleteForAuthenticatedUserResponse>;
    /**
     * Delete a codespace from the organization
     *
     * @remarks
     * Deletes a user's codespace.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces} - API method documentation
     */
    codespacesDeleteFromOrganization(req: operations.CodespacesDeleteFromOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesDeleteFromOrganizationResponse>;
    /**
     * Delete an organization secret
     *
     * @remarks
     * Deletes an organization secret using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#delete-an-organization-secret} - API method documentation
     */
    codespacesDeleteOrgSecret(req: operations.CodespacesDeleteOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesDeleteOrgSecretResponse>;
    /**
     * Delete a repository secret
     *
     * @remarks
     * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#delete-a-repository-secret} - API method documentation
     */
    codespacesDeleteRepoSecret(req: operations.CodespacesDeleteRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesDeleteRepoSecretResponse>;
    /**
     * Delete a secret for the authenticated user
     *
     * @remarks
     * Deletes a secret from a user's codespaces using the secret name. Deleting the secret will remove access from all codespaces that were allowed to access the secret.
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_user_secrets` user permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#delete-a-secret-for-the-authenticated-user} - API method documentation
     */
    codespacesDeleteSecretForAuthenticatedUser(req: operations.CodespacesDeleteSecretForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesDeleteSecretForAuthenticatedUserResponse>;
    /**
     * Export a codespace for the authenticated user
     *
     * @remarks
     * Triggers an export of the specified codespace and returns a URL and ID where the status of the export can be monitored.
     *
     * If changes cannot be pushed to the codespace's repository, they will be pushed to a new or previously-existing fork instead.
     *
     * You must authenticate using a personal access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/codespaces/codespaces#export-a-codespace-for-the-authenticated-user} - API method documentation
     */
    codespacesExportForAuthenticatedUser(req: operations.CodespacesExportForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesExportForAuthenticatedUserResponse>;
    /**
     * List codespaces for a user in organization
     *
     * @remarks
     * Lists the codespaces that a member of an organization has for repositories in that organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#get-codespaces-for-user-in-org} - API method documentation
     */
    codespacesGetCodespacesForUserInOrg(req: operations.CodespacesGetCodespacesForUserInOrgRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesGetCodespacesForUserInOrgResponse>;
    /**
     * Get details about a codespace export
     *
     * @remarks
     * Gets information about an export of a codespace.
     *
     * You must authenticate using a personal access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/codespaces/codespaces#get-details-about-a-codespace-export} - API method documentation
     */
    codespacesGetExportDetailsForAuthenticatedUser(req: operations.CodespacesGetExportDetailsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesGetExportDetailsForAuthenticatedUserResponse>;
    /**
     * Get a codespace for the authenticated user
     *
     * @remarks
     * Gets information about a user's codespace.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#get-a-codespace-for-the-authenticated-user} - API method documentation
     */
    codespacesGetForAuthenticatedUser(req: operations.CodespacesGetForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesGetForAuthenticatedUserResponse>;
    /**
     * Get an organization public key
     *
     * @remarks
     * Gets a public key for an organization, which is required in order to encrypt secrets. You need to encrypt the value of a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#get-an-organization-public-key} - API method documentation
     */
    codespacesGetOrgPublicKey(req: operations.CodespacesGetOrgPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesGetOrgPublicKeyResponse>;
    /**
     * Get an organization secret
     *
     * @remarks
     * Gets an organization secret without revealing its encrypted value.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#get-an-organization-secret} - API method documentation
     */
    codespacesGetOrgSecret(req: operations.CodespacesGetOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesGetOrgSecretResponse>;
    /**
     * Get public key for the authenticated user
     *
     * @remarks
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets.
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#get-public-key-for-the-authenticated-user} - API method documentation
     */
    codespacesGetPublicKeyForAuthenticatedUser(config?: AxiosRequestConfig): Promise<operations.CodespacesGetPublicKeyForAuthenticatedUserResponse>;
    /**
     * Get a repository public key
     *
     * @remarks
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#get-a-repository-public-key} - API method documentation
     */
    codespacesGetRepoPublicKey(req: operations.CodespacesGetRepoPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesGetRepoPublicKeyResponse>;
    /**
     * Get a repository secret
     *
     * @remarks
     * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#get-a-repository-secret} - API method documentation
     */
    codespacesGetRepoSecret(req: operations.CodespacesGetRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesGetRepoSecretResponse>;
    /**
     * Get a secret for the authenticated user
     *
     * @remarks
     * Gets a secret available to a user's codespaces without revealing its encrypted value.
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#get-a-secret-for-the-authenticated-user} - API method documentation
     */
    codespacesGetSecretForAuthenticatedUser(req: operations.CodespacesGetSecretForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesGetSecretForAuthenticatedUserResponse>;
    /**
     * List devcontainer configurations in a repository for the authenticated user
     *
     * @remarks
     * Lists the devcontainer.json files associated with a specified repository and the authenticated user. These files
     * specify launchpoint configurations for codespaces created within the repository.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_metadata` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#list-devcontainers-in-a-repository-for-the-authenticated-user} - API method documentation
     */
    codespacesListDevcontainersInRepositoryForAuthenticatedUser(req: operations.CodespacesListDevcontainersInRepositoryForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesListDevcontainersInRepositoryForAuthenticatedUserResponse>;
    /**
     * List codespaces for the authenticated user
     *
     * @remarks
     * Lists the authenticated user's codespaces.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#list-codespaces-for-the-authenticated-user} - API method documentation
     */
    codespacesListForAuthenticatedUser(req: operations.CodespacesListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesListForAuthenticatedUserResponse>;
    /**
     * List codespaces for the organization
     *
     * @remarks
     * Lists the codespaces associated to a specified organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#list-in-organization} - API method documentation
     */
    codespacesListInOrganization(req: operations.CodespacesListInOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesListInOrganizationResponse>;
    /**
     * List codespaces in a repository for the authenticated user
     *
     * @remarks
     * Lists the codespaces associated to a specified repository and the authenticated user.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#list-codespaces-in-a-repository-for-the-authenticated-user} - API method documentation
     */
    codespacesListInRepositoryForAuthenticatedUser(req: operations.CodespacesListInRepositoryForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesListInRepositoryForAuthenticatedUserResponse>;
    /**
     * List organization secrets
     *
     * @remarks
     * Lists all Codespaces secrets available at the organization-level without revealing their encrypted values.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#list-organization-secrets} - API method documentation
     */
    codespacesListOrgSecrets(req: operations.CodespacesListOrgSecretsRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesListOrgSecretsResponse>;
    /**
     * List repository secrets
     *
     * @remarks
     * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#list-repository-secrets} - API method documentation
     */
    codespacesListRepoSecrets(req: operations.CodespacesListRepoSecretsRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesListRepoSecretsResponse>;
    /**
     * List selected repositories for a user secret
     *
     * @remarks
     * List the repositories that have been granted the ability to use a user's codespace secret.
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-a-user-secret} - API method documentation
     */
    codespacesListRepositoriesForSecretForAuthenticatedUser(req: operations.CodespacesListRepositoriesForSecretForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesListRepositoriesForSecretForAuthenticatedUserResponse>;
    /**
     * List secrets for the authenticated user
     *
     * @remarks
     * Lists all secrets available for a user's Codespaces without revealing their
     * encrypted values.
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#list-secrets-for-the-authenticated-user} - API method documentation
     */
    codespacesListSecretsForAuthenticatedUser(req: operations.CodespacesListSecretsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesListSecretsForAuthenticatedUserResponse>;
    /**
     * List selected repositories for an organization secret
     *
     * @remarks
     * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-an-organization-secret} - API method documentation
     */
    codespacesListSelectedReposForOrgSecret(req: operations.CodespacesListSelectedReposForOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesListSelectedReposForOrgSecretResponse>;
    /**
     * Get default attributes for a codespace
     *
     * @remarks
     * Gets the default attributes for codespaces created by the user with the repository.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#preview-attributes-for-a-new-codespace} - API method documentation
     */
    codespacesPreFlightWithRepoForAuthenticatedUser(req: operations.CodespacesPreFlightWithRepoForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesPreFlightWithRepoForAuthenticatedUserResponse>;
    /**
     * Create a repository from an unpublished codespace
     *
     * @remarks
     * Publishes an unpublished codespace, creating a new repository and assigning it to the codespace.
     *
     * The codespace's token is granted write permissions to the repository, allowing the user to push their changes.
     *
     * This will fail for a codespace that is already published, meaning it has an associated repository.
     *
     * You must authenticate using a personal access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces/codespaces#create-a-repository-from-an-unpublished-codespace} - API method documentation
     */
    codespacesPublishForAuthenticatedUser(req: operations.CodespacesPublishForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesPublishForAuthenticatedUserResponse>;
    /**
     * Remove a selected repository from a user secret
     *
     * @remarks
     * Removes a repository from the selected repositories for a user's codespace secret.
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     * GitHub Apps must have write access to the `codespaces_user_secrets` user permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret} - API method documentation
     */
    codespacesRemoveRepositoryForSecretForAuthenticatedUser(req: operations.CodespacesRemoveRepositoryForSecretForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesRemoveRepositoryForSecretForAuthenticatedUserResponse>;
    /**
     * Remove selected repository from an organization secret
     *
     * @remarks
     * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/codespaces#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#remove-selected-repository-from-an-organization-secret} - API method documentation
     */
    codespacesRemoveSelectedRepoFromOrgSecret(req: operations.CodespacesRemoveSelectedRepoFromOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesRemoveSelectedRepoFromOrgSecretResponse>;
    /**
     * List available machine types for a repository
     *
     * @remarks
     * List the machine types available for a given repository based on its configuration.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_metadata` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#list-available-machine-types-for-a-repository} - API method documentation
     */
    codespacesRepoMachinesForAuthenticatedUser(req: operations.CodespacesRepoMachinesForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesRepoMachinesForAuthenticatedUserResponse>;
    /**
     * Manage access control for organization codespaces
     *
     * @remarks
     * Sets which users can access codespaces in an organization. This is synonymous with granting or revoking codespaces billing permissions for users according to the visibility.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#set-codespaces-billing} - API method documentation
     */
    codespacesSetCodespacesBilling(req: operations.CodespacesSetCodespacesBillingRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesSetCodespacesBillingResponse>;
    /**
     * Add users to Codespaces billing for an organization
     *
     * @remarks
     * Codespaces for the specified users will be billed to the organization.
     * To use this endpoint, the billing settings for the organization must be set to `selected_members`. For information on how to change this setting please see [these docs].(https://docs.github.com/rest/codespaces/organizations#manage-access-control-for-organization-codespaces) You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#set-codespaces-billing-users} - API method documentation
     */
    codespacesSetCodespacesBillingUsers(req: operations.CodespacesSetCodespacesBillingUsersRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesSetCodespacesBillingUsersResponse>;
    /**
     * Set selected repositories for a user secret
     *
     * @remarks
     * Select the repositories that will use a user's codespace secret.
     *
     * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#set-selected-repositories-for-a-user-secret} - API method documentation
     */
    codespacesSetRepositoriesForSecretForAuthenticatedUser(req: operations.CodespacesSetRepositoriesForSecretForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesSetRepositoriesForSecretForAuthenticatedUserResponse>;
    /**
     * Set selected repositories for an organization secret
     *
     * @remarks
     * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/codespaces#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#set-selected-repositories-for-an-organization-secret} - API method documentation
     */
    codespacesSetSelectedReposForOrgSecret(req: operations.CodespacesSetSelectedReposForOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesSetSelectedReposForOrgSecretResponse>;
    /**
     * Start a codespace for the authenticated user
     *
     * @remarks
     * Starts a user's codespace.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#start-a-codespace-for-the-authenticated-user} - API method documentation
     */
    codespacesStartForAuthenticatedUser(req: operations.CodespacesStartForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesStartForAuthenticatedUserResponse>;
    /**
     * Stop a codespace for the authenticated user
     *
     * @remarks
     * Stops a user's codespace.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#stop-a-codespace-for-the-authenticated-user} - API method documentation
     */
    codespacesStopForAuthenticatedUser(req: operations.CodespacesStopForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesStopForAuthenticatedUserResponse>;
    /**
     * Stop a codespace for an organization user
     *
     * @remarks
     * Stops a user's codespace.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces} - API method documentation
     */
    codespacesStopInOrganization(req: operations.CodespacesStopInOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesStopInOrganizationResponse>;
    /**
     * Update a codespace for the authenticated user
     *
     * @remarks
     * Updates a codespace owned by the authenticated user. Currently only the codespace's machine type and recent folders can be modified using this endpoint.
     *
     * If you specify a new machine type it will be applied the next time your codespace is started.
     *
     * You must authenticate using an access token with the `codespace` scope to use this endpoint.
     *
     * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/reference/codespaces#update-a-codespace-for-the-authenticated-user} - API method documentation
     */
    codespacesUpdateForAuthenticatedUser(req: operations.CodespacesUpdateForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.CodespacesUpdateForAuthenticatedUserResponse>;
}
