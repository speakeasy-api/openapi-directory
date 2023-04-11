import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints to manage Dependabot.
 */
export declare class Dependabot {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add selected repository to an organization secret
     *
     * @remarks
     * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#add-selected-repository-to-an-organization-secret} - API method documentation
     */
    dependabotAddSelectedRepoToOrgSecret(req: operations.DependabotAddSelectedRepoToOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.DependabotAddSelectedRepoToOrgSecretResponse>;
    /**
     * Create or update an organization secret
     *
     * @remarks
     * Creates or updates an organization secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
     * token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization
     * permission to use this endpoint.
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
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#create-or-update-an-organization-secret} - API method documentation
     */
    dependabotCreateOrUpdateOrgSecret(req: operations.DependabotCreateOrUpdateOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.DependabotCreateOrUpdateOrgSecretResponse>;
    /**
     * Create or update a repository secret
     *
     * @remarks
     * Creates or updates a repository secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
     * token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository
     * permission to use this endpoint.
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
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#create-or-update-a-repository-secret} - API method documentation
     */
    dependabotCreateOrUpdateRepoSecret(req: operations.DependabotCreateOrUpdateRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.DependabotCreateOrUpdateRepoSecretResponse>;
    /**
     * Delete an organization secret
     *
     * @remarks
     * Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#delete-an-organization-secret} - API method documentation
     */
    dependabotDeleteOrgSecret(req: operations.DependabotDeleteOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.DependabotDeleteOrgSecretResponse>;
    /**
     * Delete a repository secret
     *
     * @remarks
     * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#delete-a-repository-secret} - API method documentation
     */
    dependabotDeleteRepoSecret(req: operations.DependabotDeleteRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.DependabotDeleteRepoSecretResponse>;
    /**
     * Get a Dependabot alert
     *
     * @remarks
     * You must use an access token with the `security_events` scope to use this endpoint with private repositories.
     * You can also use tokens with the `public_repo` scope for public repositories only.
     * GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#get-a-dependabot-alert} - API method documentation
     */
    dependabotGetAlert(req: operations.DependabotGetAlertRequest, config?: AxiosRequestConfig): Promise<operations.DependabotGetAlertResponse>;
    /**
     * Get an organization public key
     *
     * @remarks
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#get-an-organization-public-key} - API method documentation
     */
    dependabotGetOrgPublicKey(req: operations.DependabotGetOrgPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.DependabotGetOrgPublicKeyResponse>;
    /**
     * Get an organization secret
     *
     * @remarks
     * Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#get-an-organization-secret} - API method documentation
     */
    dependabotGetOrgSecret(req: operations.DependabotGetOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.DependabotGetOrgSecretResponse>;
    /**
     * Get a repository public key
     *
     * @remarks
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#get-a-repository-public-key} - API method documentation
     */
    dependabotGetRepoPublicKey(req: operations.DependabotGetRepoPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.DependabotGetRepoPublicKeyResponse>;
    /**
     * Get a repository secret
     *
     * @remarks
     * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#get-a-repository-secret} - API method documentation
     */
    dependabotGetRepoSecret(req: operations.DependabotGetRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.DependabotGetRepoSecretResponse>;
    /**
     * List Dependabot alerts for an enterprise
     *
     * @remarks
     * Lists Dependabot alerts for repositories that are owned by the specified enterprise.
     * To use this endpoint, you must be a member of the enterprise, and you must use an
     * access token with the `repo` scope or `security_events` scope.
     * Alerts are only returned for organizations in the enterprise for which you are an organization owner or a security manager. For more information about security managers, see "[Managing security managers in your organization](https://docs.github.com/enterprise-cloud@latest//organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/dependabot/alerts#list-dependabot-alerts-for-an-enterprise} - API method documentation
     */
    dependabotListAlertsForEnterprise(req: operations.DependabotListAlertsForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.DependabotListAlertsForEnterpriseResponse>;
    /**
     * List Dependabot alerts for an organization
     *
     * @remarks
     * Lists Dependabot alerts for an organization.
     *
     * To use this endpoint, you must be an owner or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.
     *
     * For public repositories, you may instead use the `public_repo` scope.
     *
     * GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/dependabot/alerts#list-dependabot-alerts-for-an-organization} - API method documentation
     */
    dependabotListAlertsForOrg(req: operations.DependabotListAlertsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.DependabotListAlertsForOrgResponse>;
    /**
     * List Dependabot alerts for a repository
     *
     * @remarks
     * You must use an access token with the `security_events` scope to use this endpoint with private repositories.
     * You can also use tokens with the `public_repo` scope for public repositories only.
     * GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#list-dependabot-alerts-for-a-repository} - API method documentation
     */
    dependabotListAlertsForRepo(req: operations.DependabotListAlertsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.DependabotListAlertsForRepoResponse>;
    /**
     * List organization secrets
     *
     * @remarks
     * Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#list-organization-secrets} - API method documentation
     */
    dependabotListOrgSecrets(req: operations.DependabotListOrgSecretsRequest, config?: AxiosRequestConfig): Promise<operations.DependabotListOrgSecretsResponse>;
    /**
     * List repository secrets
     *
     * @remarks
     * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#list-repository-secrets} - API method documentation
     */
    dependabotListRepoSecrets(req: operations.DependabotListRepoSecretsRequest, config?: AxiosRequestConfig): Promise<operations.DependabotListRepoSecretsResponse>;
    /**
     * List selected repositories for an organization secret
     *
     * @remarks
     * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#list-selected-repositories-for-an-organization-secret} - API method documentation
     */
    dependabotListSelectedReposForOrgSecret(req: operations.DependabotListSelectedReposForOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.DependabotListSelectedReposForOrgSecretResponse>;
    /**
     * Remove selected repository from an organization secret
     *
     * @remarks
     * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#remove-selected-repository-from-an-organization-secret} - API method documentation
     */
    dependabotRemoveSelectedRepoFromOrgSecret(req: operations.DependabotRemoveSelectedRepoFromOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.DependabotRemoveSelectedRepoFromOrgSecretResponse>;
    /**
     * Set selected repositories for an organization secret
     *
     * @remarks
     * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#set-selected-repositories-for-an-organization-secret} - API method documentation
     */
    dependabotSetSelectedReposForOrgSecret(req: operations.DependabotSetSelectedReposForOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.DependabotSetSelectedReposForOrgSecretResponse>;
    /**
     * Update a Dependabot alert
     *
     * @remarks
     * You must use an access token with the `security_events` scope to use this endpoint with private repositories.
     * You can also use tokens with the `public_repo` scope for public repositories only.
     * GitHub Apps must have **Dependabot alerts** write permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/dependabot#update-a-dependabot-alert} - API method documentation
     */
    dependabotUpdateAlert(req: operations.DependabotUpdateAlertRequest, config?: AxiosRequestConfig): Promise<operations.DependabotUpdateAlertResponse>;
}
