package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Actions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Actions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * actionsAddRepoAccessToSelfHostedRunnerGroupInOrg - Add repository access to a self-hosted runner group in an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     * 
     * 
     * Adds a repository to the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
     * 
     * You must authenticate using an access token with the `admin:org`
     * scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse actionsAddRepoAccessToSelfHostedRunnerGroupInOrg(openapisdk.models.operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse res = new openapisdk.models.operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsAddSelectedRepoToOrgSecret - Add selected repository to an organization secret
     *
     * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#add-selected-repository-to-an-organization-secret - API method documentation
    **/
    public openapisdk.models.operations.ActionsAddSelectedRepoToOrgSecretResponse actionsAddSelectedRepoToOrgSecret(openapisdk.models.operations.ActionsAddSelectedRepoToOrgSecretRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsAddSelectedRepoToOrgSecretResponse res = new openapisdk.models.operations.ActionsAddSelectedRepoToOrgSecretResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 409) {
        }

        return res;
    }
	
	
    /**
     * actionsAddSelfHostedRunnerToGroupForOrg - Add a self-hosted runner to a group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     * 
     * 
     * Adds a self-hosted runner to a runner group configured in an organization.
     * 
     * You must authenticate using an access token with the `admin:org`
     * scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsAddSelfHostedRunnerToGroupForOrgResponse actionsAddSelfHostedRunnerToGroupForOrg(openapisdk.models.operations.ActionsAddSelfHostedRunnerToGroupForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsAddSelfHostedRunnerToGroupForOrgResponse res = new openapisdk.models.operations.ActionsAddSelfHostedRunnerToGroupForOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsCancelWorkflowRun - Cancel a workflow run
     *
     * Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#cancel-a-workflow-run - API method documentation
    **/
    public openapisdk.models.operations.ActionsCancelWorkflowRunResponse actionsCancelWorkflowRun(openapisdk.models.operations.ActionsCancelWorkflowRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsCancelWorkflowRunResponse res = new openapisdk.models.operations.ActionsCancelWorkflowRunResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
        }

        return res;
    }
	
	
    /**
     * actionsCreateOrUpdateEnvironmentSecret - Create or update an environment secret
     *
     * Creates or updates an environment secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
     * token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
     * this endpoint.
     * 
     * #### Example encrypting a secret using Node.js
     * 
     * Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
     * 
     * ```
     * const sodium = require('tweetsodium');
     * 
     * const key = "base64-encoded-public-key";
     * const value = "plain-text-secret";
     * 
     * // Convert the message and key to Uint8Array's (Buffer implements that interface)
     * const messageBytes = Buffer.from(value);
     * const keyBytes = Buffer.from(key, 'base64');
     * 
     * // Encrypt using LibSodium.
     * const encryptedBytes = sodium.seal(messageBytes, keyBytes);
     * 
     * // Base64 the encrypted secret
     * const encrypted = Buffer.from(encryptedBytes).toString('base64');
     * 
     * console.log(encrypted);
     * ```
     * 
     * 
     * #### Example encrypting a secret using Python
     * 
     * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.
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
     * https://docs.github.com/rest/reference/actions#create-or-update-an-environment-secret - API method documentation
    **/
    public openapisdk.models.operations.ActionsCreateOrUpdateEnvironmentSecretResponse actionsCreateOrUpdateEnvironmentSecret(openapisdk.models.operations.ActionsCreateOrUpdateEnvironmentSecretRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsCreateOrUpdateEnvironmentSecretResponse res = new openapisdk.models.operations.ActionsCreateOrUpdateEnvironmentSecretResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }
        else if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsCreateOrUpdateOrgSecret - Create or update an organization secret
     *
     * Creates or updates an organization secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
     * token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to
     * use this endpoint.
     * 
     * #### Example encrypting a secret using Node.js
     * 
     * Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
     * 
     * ```
     * const sodium = require('tweetsodium');
     * 
     * const key = "base64-encoded-public-key";
     * const value = "plain-text-secret";
     * 
     * // Convert the message and key to Uint8Array's (Buffer implements that interface)
     * const messageBytes = Buffer.from(value);
     * const keyBytes = Buffer.from(key, 'base64');
     * 
     * // Encrypt using LibSodium.
     * const encryptedBytes = sodium.seal(messageBytes, keyBytes);
     * 
     * // Base64 the encrypted secret
     * const encrypted = Buffer.from(encryptedBytes).toString('base64');
     * 
     * console.log(encrypted);
     * ```
     * 
     * 
     * #### Example encrypting a secret using Python
     * 
     * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.
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
     * https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret - API method documentation
    **/
    public openapisdk.models.operations.ActionsCreateOrUpdateOrgSecretResponse actionsCreateOrUpdateOrgSecret(openapisdk.models.operations.ActionsCreateOrUpdateOrgSecretRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/secrets/{secret_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsCreateOrUpdateOrgSecretResponse res = new openapisdk.models.operations.ActionsCreateOrUpdateOrgSecretResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }
        else if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsCreateOrUpdateRepoSecret - Create or update a repository secret
     *
     * Creates or updates a repository secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
     * token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
     * this endpoint.
     * 
     * #### Example encrypting a secret using Node.js
     * 
     * Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
     * 
     * ```
     * const sodium = require('tweetsodium');
     * 
     * const key = "base64-encoded-public-key";
     * const value = "plain-text-secret";
     * 
     * // Convert the message and key to Uint8Array's (Buffer implements that interface)
     * const messageBytes = Buffer.from(value);
     * const keyBytes = Buffer.from(key, 'base64');
     * 
     * // Encrypt using LibSodium.
     * const encryptedBytes = sodium.seal(messageBytes, keyBytes);
     * 
     * // Base64 the encrypted secret
     * const encrypted = Buffer.from(encryptedBytes).toString('base64');
     * 
     * console.log(encrypted);
     * ```
     * 
     * 
     * #### Example encrypting a secret using Python
     * 
     * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.
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
     * https://docs.github.com/rest/reference/actions#create-or-update-a-repository-secret - API method documentation
    **/
    public openapisdk.models.operations.ActionsCreateOrUpdateRepoSecretResponse actionsCreateOrUpdateRepoSecret(openapisdk.models.operations.ActionsCreateOrUpdateRepoSecretRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsCreateOrUpdateRepoSecretResponse res = new openapisdk.models.operations.ActionsCreateOrUpdateRepoSecretResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }
        else if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsCreateRegistrationTokenForOrg - Create a registration token for an organization
     *
     * Returns a token that you can pass to the `config` script. The token expires after one hour.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * 
     * #### Example using registration token
     * 
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     * 
     * ```
     * ./config.sh --url https://github.com/octo-org --token TOKEN
     * ```
     *
     * https://docs.github.com/rest/reference/actions#create-a-registration-token-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsCreateRegistrationTokenForOrgResponse actionsCreateRegistrationTokenForOrg(openapisdk.models.operations.ActionsCreateRegistrationTokenForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runners/registration-token", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsCreateRegistrationTokenForOrgResponse res = new openapisdk.models.operations.ActionsCreateRegistrationTokenForOrgResponse() {{
            authenticationToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuthenticationToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuthenticationToken.class);
                res.authenticationToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsCreateRegistrationTokenForRepo - Create a registration token for a repository
     *
     * Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
     * using an access token with the `repo` scope to use this endpoint.
     * 
     * #### Example using registration token
     *  
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     * 
     * ```
     * ./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
     * ```
     *
     * https://docs.github.com/rest/reference/actions#create-a-registration-token-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.ActionsCreateRegistrationTokenForRepoResponse actionsCreateRegistrationTokenForRepo(openapisdk.models.operations.ActionsCreateRegistrationTokenForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runners/registration-token", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsCreateRegistrationTokenForRepoResponse res = new openapisdk.models.operations.ActionsCreateRegistrationTokenForRepoResponse() {{
            authenticationToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuthenticationToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuthenticationToken.class);
                res.authenticationToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsCreateRemoveTokenForOrg - Create a remove token for an organization
     *
     * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * 
     * #### Example using remove token
     * 
     * To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
     * endpoint.
     * 
     * ```
     * ./config.sh remove --token TOKEN
     * ```
     *
     * https://docs.github.com/rest/reference/actions#create-a-remove-token-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsCreateRemoveTokenForOrgResponse actionsCreateRemoveTokenForOrg(openapisdk.models.operations.ActionsCreateRemoveTokenForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runners/remove-token", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsCreateRemoveTokenForOrgResponse res = new openapisdk.models.operations.ActionsCreateRemoveTokenForOrgResponse() {{
            authenticationToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuthenticationToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuthenticationToken.class);
                res.authenticationToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsCreateRemoveTokenForRepo - Create a remove token for a repository
     *
     * Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * 
     * #### Example using remove token
     *  
     * To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.
     * 
     * ```
     * ./config.sh remove --token TOKEN
     * ```
     *
     * https://docs.github.com/rest/reference/actions#create-a-remove-token-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.ActionsCreateRemoveTokenForRepoResponse actionsCreateRemoveTokenForRepo(openapisdk.models.operations.ActionsCreateRemoveTokenForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runners/remove-token", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsCreateRemoveTokenForRepoResponse res = new openapisdk.models.operations.ActionsCreateRemoveTokenForRepoResponse() {{
            authenticationToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuthenticationToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuthenticationToken.class);
                res.authenticationToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsCreateSelfHostedRunnerGroupForOrg - Create a self-hosted runner group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     * 
     * Creates a new self-hosted runner group for an organization.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsCreateSelfHostedRunnerGroupForOrgResponse actionsCreateSelfHostedRunnerGroupForOrg(openapisdk.models.operations.ActionsCreateSelfHostedRunnerGroupForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runner-groups", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsCreateSelfHostedRunnerGroupForOrgResponse res = new openapisdk.models.operations.ActionsCreateSelfHostedRunnerGroupForOrgResponse() {{
            runnerGroupsOrg = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RunnerGroupsOrg out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RunnerGroupsOrg.class);
                res.runnerGroupsOrg = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsCreateWorkflowDispatch - Create a workflow dispatch event
     *
     * You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     * 
     * You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."
     * 
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line)."
     *
     * https://docs.github.com/rest/reference/actions#create-a-workflow-dispatch-event - API method documentation
    **/
    public openapisdk.models.operations.ActionsCreateWorkflowDispatchResponse actionsCreateWorkflowDispatch(openapisdk.models.operations.ActionsCreateWorkflowDispatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsCreateWorkflowDispatchResponse res = new openapisdk.models.operations.ActionsCreateWorkflowDispatchResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsDeleteArtifact - Delete an artifact
     *
     * Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-an-artifact - API method documentation
    **/
    public openapisdk.models.operations.ActionsDeleteArtifactResponse actionsDeleteArtifact(openapisdk.models.operations.ActionsDeleteArtifactRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDeleteArtifactResponse res = new openapisdk.models.operations.ActionsDeleteArtifactResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsDeleteEnvironmentSecret - Delete an environment secret
     *
     * Deletes a secret in an environment using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-an-environment-secret - API method documentation
    **/
    public openapisdk.models.operations.ActionsDeleteEnvironmentSecretResponse actionsDeleteEnvironmentSecret(openapisdk.models.operations.ActionsDeleteEnvironmentSecretRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDeleteEnvironmentSecretResponse res = new openapisdk.models.operations.ActionsDeleteEnvironmentSecretResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsDeleteOrgSecret - Delete an organization secret
     *
     * Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-an-organization-secret - API method documentation
    **/
    public openapisdk.models.operations.ActionsDeleteOrgSecretResponse actionsDeleteOrgSecret(openapisdk.models.operations.ActionsDeleteOrgSecretRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/secrets/{secret_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDeleteOrgSecretResponse res = new openapisdk.models.operations.ActionsDeleteOrgSecretResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsDeleteRepoSecret - Delete a repository secret
     *
     * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-a-repository-secret - API method documentation
    **/
    public openapisdk.models.operations.ActionsDeleteRepoSecretResponse actionsDeleteRepoSecret(openapisdk.models.operations.ActionsDeleteRepoSecretRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDeleteRepoSecretResponse res = new openapisdk.models.operations.ActionsDeleteRepoSecretResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsDeleteSelfHostedRunnerFromOrg - Delete a self-hosted runner from an organization
     *
     * Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsDeleteSelfHostedRunnerFromOrgResponse actionsDeleteSelfHostedRunnerFromOrg(openapisdk.models.operations.ActionsDeleteSelfHostedRunnerFromOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runners/{runner_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDeleteSelfHostedRunnerFromOrgResponse res = new openapisdk.models.operations.ActionsDeleteSelfHostedRunnerFromOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsDeleteSelfHostedRunnerFromRepo - Delete a self-hosted runner from a repository
     *
     * Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     * 
     * You must authenticate using an access token with the `repo`
     * scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository - API method documentation
    **/
    public openapisdk.models.operations.ActionsDeleteSelfHostedRunnerFromRepoResponse actionsDeleteSelfHostedRunnerFromRepo(openapisdk.models.operations.ActionsDeleteSelfHostedRunnerFromRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runners/{runner_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDeleteSelfHostedRunnerFromRepoResponse res = new openapisdk.models.operations.ActionsDeleteSelfHostedRunnerFromRepoResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsDeleteSelfHostedRunnerGroupFromOrg - Delete a self-hosted runner group from an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     * 
     * Deletes a self-hosted runner group for an organization.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsDeleteSelfHostedRunnerGroupFromOrgResponse actionsDeleteSelfHostedRunnerGroupFromOrg(openapisdk.models.operations.ActionsDeleteSelfHostedRunnerGroupFromOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runner-groups/{runner_group_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDeleteSelfHostedRunnerGroupFromOrgResponse res = new openapisdk.models.operations.ActionsDeleteSelfHostedRunnerGroupFromOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsDeleteWorkflowRun - Delete a workflow run
     *
     * Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
     * private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
     * this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-a-workflow-run - API method documentation
    **/
    public openapisdk.models.operations.ActionsDeleteWorkflowRunResponse actionsDeleteWorkflowRun(openapisdk.models.operations.ActionsDeleteWorkflowRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runs/{run_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDeleteWorkflowRunResponse res = new openapisdk.models.operations.ActionsDeleteWorkflowRunResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsDeleteWorkflowRunLogs - Delete workflow run logs
     *
     * Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#delete-workflow-run-logs - API method documentation
    **/
    public openapisdk.models.operations.ActionsDeleteWorkflowRunLogsResponse actionsDeleteWorkflowRunLogs(openapisdk.models.operations.ActionsDeleteWorkflowRunLogsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runs/{run_id}/logs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDeleteWorkflowRunLogsResponse res = new openapisdk.models.operations.ActionsDeleteWorkflowRunLogsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsDisableSelectedRepositoryGithubActionsOrganization - Disable a selected repository for GitHub Actions in an organization
     *
     * Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse actionsDisableSelectedRepositoryGithubActionsOrganization(openapisdk.models.operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/permissions/repositories/{repository_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse res = new openapisdk.models.operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsDisableWorkflow - Disable a workflow
     *
     * Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     * 
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#disable-a-workflow - API method documentation
    **/
    public openapisdk.models.operations.ActionsDisableWorkflowResponse actionsDisableWorkflow(openapisdk.models.operations.ActionsDisableWorkflowRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDisableWorkflowResponse res = new openapisdk.models.operations.ActionsDisableWorkflowResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsDownloadArtifact - Download an artifact
     *
     * Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
     * the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
     * the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#download-an-artifact - API method documentation
    **/
    public openapisdk.models.operations.ActionsDownloadArtifactResponse actionsDownloadArtifact(openapisdk.models.operations.ActionsDownloadArtifactRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDownloadArtifactResponse res = new openapisdk.models.operations.ActionsDownloadArtifactResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 302) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }

        return res;
    }
	
	
    /**
     * actionsDownloadJobLogsForWorkflowRun - Download job logs for a workflow run
     *
     * Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
     * for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
     * use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
     * have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#download-job-logs-for-a-workflow-run - API method documentation
    **/
    public openapisdk.models.operations.ActionsDownloadJobLogsForWorkflowRunResponse actionsDownloadJobLogsForWorkflowRun(openapisdk.models.operations.ActionsDownloadJobLogsForWorkflowRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDownloadJobLogsForWorkflowRunResponse res = new openapisdk.models.operations.ActionsDownloadJobLogsForWorkflowRunResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 302) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }

        return res;
    }
	
	
    /**
     * actionsDownloadWorkflowRunLogs - Download workflow run logs
     *
     * Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
     * `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
     * this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
     * the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#download-workflow-run-logs - API method documentation
    **/
    public openapisdk.models.operations.ActionsDownloadWorkflowRunLogsResponse actionsDownloadWorkflowRunLogs(openapisdk.models.operations.ActionsDownloadWorkflowRunLogsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runs/{run_id}/logs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsDownloadWorkflowRunLogsResponse res = new openapisdk.models.operations.ActionsDownloadWorkflowRunLogsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 302) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }

        return res;
    }
	
	
    /**
     * actionsEnableSelectedRepositoryGithubActionsOrganization - Enable a selected repository for GitHub Actions in an organization
     *
     * Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse actionsEnableSelectedRepositoryGithubActionsOrganization(openapisdk.models.operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/permissions/repositories/{repository_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse res = new openapisdk.models.operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsEnableWorkflow - Enable a workflow
     *
     * Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     * 
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#enable-a-workflow - API method documentation
    **/
    public openapisdk.models.operations.ActionsEnableWorkflowResponse actionsEnableWorkflow(openapisdk.models.operations.ActionsEnableWorkflowRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsEnableWorkflowResponse res = new openapisdk.models.operations.ActionsEnableWorkflowResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsGetAllowedActionsOrganization - Get allowed actions for an organization
     *
     * Gets the selected actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).""
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#get-allowed-actions-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetAllowedActionsOrganizationResponse actionsGetAllowedActionsOrganization(openapisdk.models.operations.ActionsGetAllowedActionsOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/permissions/selected-actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetAllowedActionsOrganizationResponse res = new openapisdk.models.operations.ActionsGetAllowedActionsOrganizationResponse() {{
            selectedActions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SelectedActions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SelectedActions.class);
                res.selectedActions = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetAllowedActionsRepository - Get allowed actions for a repository
     *
     * Gets the settings for selected actions that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
     * 
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#get-allowed-actions-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetAllowedActionsRepositoryResponse actionsGetAllowedActionsRepository(openapisdk.models.operations.ActionsGetAllowedActionsRepositoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/permissions/selected-actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetAllowedActionsRepositoryResponse res = new openapisdk.models.operations.ActionsGetAllowedActionsRepositoryResponse() {{
            selectedActions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SelectedActions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SelectedActions.class);
                res.selectedActions = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetArtifact - Get an artifact
     *
     * Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-an-artifact - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetArtifactResponse actionsGetArtifact(openapisdk.models.operations.ActionsGetArtifactRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetArtifactResponse res = new openapisdk.models.operations.ActionsGetArtifactResponse() {{
            artifact = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Artifact out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Artifact.class);
                res.artifact = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetEnvironmentPublicKey - Get an environment public key
     *
     * Get the public key for an environment, which you need to encrypt environment secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-an-environment-public-key - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetEnvironmentPublicKeyResponse actionsGetEnvironmentPublicKey(openapisdk.models.operations.ActionsGetEnvironmentPublicKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{repository_id}/environments/{environment_name}/secrets/public-key", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetEnvironmentPublicKeyResponse res = new openapisdk.models.operations.ActionsGetEnvironmentPublicKeyResponse() {{
            actionsPublicKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ActionsPublicKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ActionsPublicKey.class);
                res.actionsPublicKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetEnvironmentSecret - Get an environment secret
     *
     * Gets a single environment secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-an-environment-secret - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetEnvironmentSecretResponse actionsGetEnvironmentSecret(openapisdk.models.operations.ActionsGetEnvironmentSecretRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetEnvironmentSecretResponse res = new openapisdk.models.operations.ActionsGetEnvironmentSecretResponse() {{
            actionsSecret = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ActionsSecret out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ActionsSecret.class);
                res.actionsSecret = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetGithubActionsPermissionsOrganization - Get GitHub Actions permissions for an organization
     *
     * Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetGithubActionsPermissionsOrganizationResponse actionsGetGithubActionsPermissionsOrganization(openapisdk.models.operations.ActionsGetGithubActionsPermissionsOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/permissions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetGithubActionsPermissionsOrganizationResponse res = new openapisdk.models.operations.ActionsGetGithubActionsPermissionsOrganizationResponse() {{
            actionsOrganizationPermissions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ActionsOrganizationPermissions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ActionsOrganizationPermissions.class);
                res.actionsOrganizationPermissions = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetGithubActionsPermissionsRepository - Get GitHub Actions permissions for a repository
     *
     * Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions allowed to run in the repository.
     * 
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetGithubActionsPermissionsRepositoryResponse actionsGetGithubActionsPermissionsRepository(openapisdk.models.operations.ActionsGetGithubActionsPermissionsRepositoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/permissions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetGithubActionsPermissionsRepositoryResponse res = new openapisdk.models.operations.ActionsGetGithubActionsPermissionsRepositoryResponse() {{
            actionsRepositoryPermissions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ActionsRepositoryPermissions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ActionsRepositoryPermissions.class);
                res.actionsRepositoryPermissions = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetJobForWorkflowRun - Get a job for a workflow run
     *
     * Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-job-for-a-workflow-run - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetJobForWorkflowRunResponse actionsGetJobForWorkflowRun(openapisdk.models.operations.ActionsGetJobForWorkflowRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/jobs/{job_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetJobForWorkflowRunResponse res = new openapisdk.models.operations.ActionsGetJobForWorkflowRunResponse() {{
            job = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Job out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Job.class);
                res.job = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetOrgPublicKey - Get an organization public key
     *
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-an-organization-public-key - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetOrgPublicKeyResponse actionsGetOrgPublicKey(openapisdk.models.operations.ActionsGetOrgPublicKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/secrets/public-key", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetOrgPublicKeyResponse res = new openapisdk.models.operations.ActionsGetOrgPublicKeyResponse() {{
            actionsPublicKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ActionsPublicKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ActionsPublicKey.class);
                res.actionsPublicKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetOrgSecret - Get an organization secret
     *
     * Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-an-organization-secret - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetOrgSecretResponse actionsGetOrgSecret(openapisdk.models.operations.ActionsGetOrgSecretRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/secrets/{secret_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetOrgSecretResponse res = new openapisdk.models.operations.ActionsGetOrgSecretResponse() {{
            organizationActionsSecret = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.OrganizationActionsSecret out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.OrganizationActionsSecret.class);
                res.organizationActionsSecret = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetPendingDeploymentsForRun - Get pending deployments for a workflow run
     *
     * Get all deployment environments for a workflow run that are waiting for protection rules to pass.
     * 
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-pending-deployments-for-a-workflow-run - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetPendingDeploymentsForRunResponse actionsGetPendingDeploymentsForRun(openapisdk.models.operations.ActionsGetPendingDeploymentsForRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetPendingDeploymentsForRunResponse res = new openapisdk.models.operations.ActionsGetPendingDeploymentsForRunResponse() {{
            pendingDeployments = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PendingDeployment[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PendingDeployment[].class);
                res.pendingDeployments = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetRepoPublicKey - Get a repository public key
     *
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-repository-public-key - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetRepoPublicKeyResponse actionsGetRepoPublicKey(openapisdk.models.operations.ActionsGetRepoPublicKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/secrets/public-key", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetRepoPublicKeyResponse res = new openapisdk.models.operations.ActionsGetRepoPublicKeyResponse() {{
            actionsPublicKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ActionsPublicKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ActionsPublicKey.class);
                res.actionsPublicKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetRepoSecret - Get a repository secret
     *
     * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-repository-secret - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetRepoSecretResponse actionsGetRepoSecret(openapisdk.models.operations.ActionsGetRepoSecretRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/secrets/{secret_name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetRepoSecretResponse res = new openapisdk.models.operations.ActionsGetRepoSecretResponse() {{
            actionsSecret = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ActionsSecret out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ActionsSecret.class);
                res.actionsSecret = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetReviewsForRun - Get the review history for a workflow run
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-the-review-history-for-a-workflow-run - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetReviewsForRunResponse actionsGetReviewsForRun(openapisdk.models.operations.ActionsGetReviewsForRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runs/{run_id}/approvals", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetReviewsForRunResponse res = new openapisdk.models.operations.ActionsGetReviewsForRunResponse() {{
            environmentApprovals = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EnvironmentApprovals[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EnvironmentApprovals[].class);
                res.environmentApprovals = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetSelfHostedRunnerForOrg - Get a self-hosted runner for an organization
     *
     * Gets a specific self-hosted runner configured in an organization.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetSelfHostedRunnerForOrgResponse actionsGetSelfHostedRunnerForOrg(openapisdk.models.operations.ActionsGetSelfHostedRunnerForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runners/{runner_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetSelfHostedRunnerForOrgResponse res = new openapisdk.models.operations.ActionsGetSelfHostedRunnerForOrgResponse() {{
            runner = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Runner out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Runner.class);
                res.runner = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetSelfHostedRunnerForRepo - Get a self-hosted runner for a repository
     *
     * Gets a specific self-hosted runner configured in a repository.
     * 
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetSelfHostedRunnerForRepoResponse actionsGetSelfHostedRunnerForRepo(openapisdk.models.operations.ActionsGetSelfHostedRunnerForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runners/{runner_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetSelfHostedRunnerForRepoResponse res = new openapisdk.models.operations.ActionsGetSelfHostedRunnerForRepoResponse() {{
            runner = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Runner out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Runner.class);
                res.runner = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetSelfHostedRunnerGroupForOrg - Get a self-hosted runner group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     * 
     * Gets a specific self-hosted runner group for an organization.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetSelfHostedRunnerGroupForOrgResponse actionsGetSelfHostedRunnerGroupForOrg(openapisdk.models.operations.ActionsGetSelfHostedRunnerGroupForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runner-groups/{runner_group_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetSelfHostedRunnerGroupForOrgResponse res = new openapisdk.models.operations.ActionsGetSelfHostedRunnerGroupForOrgResponse() {{
            runnerGroupsOrg = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RunnerGroupsOrg out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RunnerGroupsOrg.class);
                res.runnerGroupsOrg = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetWorkflow - Get a workflow
     *
     * Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-workflow - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetWorkflowResponse actionsGetWorkflow(openapisdk.models.operations.ActionsGetWorkflowRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetWorkflowResponse res = new openapisdk.models.operations.ActionsGetWorkflowResponse() {{
            workflow = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Workflow out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Workflow.class);
                res.workflow = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetWorkflowRun - Get a workflow run
     *
     * Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-a-workflow-run - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetWorkflowRunResponse actionsGetWorkflowRun(openapisdk.models.operations.ActionsGetWorkflowRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runs/{run_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetWorkflowRunResponse res = new openapisdk.models.operations.ActionsGetWorkflowRunResponse() {{
            workflowRun = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.WorkflowRun out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.WorkflowRun.class);
                res.workflowRun = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetWorkflowRunUsage - Get workflow run usage
     *
     * Gets the number of billable minutes and total run time for a specific workflow run. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     * 
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-workflow-run-usage - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetWorkflowRunUsageResponse actionsGetWorkflowRunUsage(openapisdk.models.operations.ActionsGetWorkflowRunUsageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runs/{run_id}/timing", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetWorkflowRunUsageResponse res = new openapisdk.models.operations.ActionsGetWorkflowRunUsageResponse() {{
            workflowRunUsage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.WorkflowRunUsage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.WorkflowRunUsage.class);
                res.workflowRunUsage = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsGetWorkflowUsage - Get workflow usage
     *
     * Gets the number of billable minutes used by a specific workflow during the current billing cycle. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     * 
     * You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#get-workflow-usage - API method documentation
    **/
    public openapisdk.models.operations.ActionsGetWorkflowUsageResponse actionsGetWorkflowUsage(openapisdk.models.operations.ActionsGetWorkflowUsageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsGetWorkflowUsageResponse res = new openapisdk.models.operations.ActionsGetWorkflowUsageResponse() {{
            workflowUsage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.WorkflowUsage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.WorkflowUsage.class);
                res.workflowUsage = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListArtifactsForRepo - List artifacts for a repository
     *
     * Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-artifacts-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.ActionsListArtifactsForRepoResponse actionsListArtifactsForRepo(openapisdk.models.operations.ActionsListArtifactsForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/artifacts", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListArtifactsForRepoResponse res = new openapisdk.models.operations.ActionsListArtifactsForRepoResponse() {{
            actionsListArtifactsForRepo200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListArtifactsForRepo200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListArtifactsForRepo200ApplicationJson.class);
                res.actionsListArtifactsForRepo200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListEnvironmentSecrets - List environment secrets
     *
     * Lists all secrets available in an environment without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-environment-secrets - API method documentation
    **/
    public openapisdk.models.operations.ActionsListEnvironmentSecretsResponse actionsListEnvironmentSecrets(openapisdk.models.operations.ActionsListEnvironmentSecretsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repositories/{repository_id}/environments/{environment_name}/secrets", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListEnvironmentSecretsResponse res = new openapisdk.models.operations.ActionsListEnvironmentSecretsResponse() {{
            actionsListEnvironmentSecrets200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListEnvironmentSecrets200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListEnvironmentSecrets200ApplicationJson.class);
                res.actionsListEnvironmentSecrets200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListJobsForWorkflowRun - List jobs for a workflow run
     *
     * Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
     *
     * https://docs.github.com/rest/reference/actions#list-jobs-for-a-workflow-run - API method documentation
    **/
    public openapisdk.models.operations.ActionsListJobsForWorkflowRunResponse actionsListJobsForWorkflowRun(openapisdk.models.operations.ActionsListJobsForWorkflowRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListJobsForWorkflowRunResponse res = new openapisdk.models.operations.ActionsListJobsForWorkflowRunResponse() {{
            actionsListJobsForWorkflowRun200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListJobsForWorkflowRun200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListJobsForWorkflowRun200ApplicationJson.class);
                res.actionsListJobsForWorkflowRun200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListOrgSecrets - List organization secrets
     *
     * Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-organization-secrets - API method documentation
    **/
    public openapisdk.models.operations.ActionsListOrgSecretsResponse actionsListOrgSecrets(openapisdk.models.operations.ActionsListOrgSecretsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/secrets", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListOrgSecretsResponse res = new openapisdk.models.operations.ActionsListOrgSecretsResponse() {{
            actionsListOrgSecrets200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListOrgSecrets200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListOrgSecrets200ApplicationJson.class);
                res.actionsListOrgSecrets200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListRepoAccessToSelfHostedRunnerGroupInOrg - List repository access to a self-hosted runner group in an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     * 
     * Lists the repositories with access to a self-hosted runner group configured in an organization.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse actionsListRepoAccessToSelfHostedRunnerGroupInOrg(openapisdk.models.operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse res = new openapisdk.models.operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse() {{
            actionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson.class);
                res.actionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListRepoSecrets - List repository secrets
     *
     * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-repository-secrets - API method documentation
    **/
    public openapisdk.models.operations.ActionsListRepoSecretsResponse actionsListRepoSecrets(openapisdk.models.operations.ActionsListRepoSecretsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/secrets", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListRepoSecretsResponse res = new openapisdk.models.operations.ActionsListRepoSecretsResponse() {{
            actionsListRepoSecrets200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListRepoSecrets200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListRepoSecrets200ApplicationJson.class);
                res.actionsListRepoSecrets200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListRepoWorkflows - List repository workflows
     *
     * Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-repository-workflows - API method documentation
    **/
    public openapisdk.models.operations.ActionsListRepoWorkflowsResponse actionsListRepoWorkflows(openapisdk.models.operations.ActionsListRepoWorkflowsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/workflows", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListRepoWorkflowsResponse res = new openapisdk.models.operations.ActionsListRepoWorkflowsResponse() {{
            actionsListRepoWorkflows200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListRepoWorkflows200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListRepoWorkflows200ApplicationJson.class);
                res.actionsListRepoWorkflows200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListRunnerApplicationsForOrg - List runner applications for an organization
     *
     * Lists binaries for the runner application that you can download and run.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-runner-applications-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsListRunnerApplicationsForOrgResponse actionsListRunnerApplicationsForOrg(openapisdk.models.operations.ActionsListRunnerApplicationsForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runners/downloads", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListRunnerApplicationsForOrgResponse res = new openapisdk.models.operations.ActionsListRunnerApplicationsForOrgResponse() {{
            runnerApplications = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RunnerApplication[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RunnerApplication[].class);
                res.runnerApplications = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListRunnerApplicationsForRepo - List runner applications for a repository
     *
     * Lists binaries for the runner application that you can download and run.
     * 
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-runner-applications-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.ActionsListRunnerApplicationsForRepoResponse actionsListRunnerApplicationsForRepo(openapisdk.models.operations.ActionsListRunnerApplicationsForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runners/downloads", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListRunnerApplicationsForRepoResponse res = new openapisdk.models.operations.ActionsListRunnerApplicationsForRepoResponse() {{
            runnerApplications = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RunnerApplication[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RunnerApplication[].class);
                res.runnerApplications = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListSelectedReposForOrgSecret - List selected repositories for an organization secret
     *
     * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-selected-repositories-for-an-organization-secret - API method documentation
    **/
    public openapisdk.models.operations.ActionsListSelectedReposForOrgSecretResponse actionsListSelectedReposForOrgSecret(openapisdk.models.operations.ActionsListSelectedReposForOrgSecretRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/secrets/{secret_name}/repositories", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListSelectedReposForOrgSecretResponse res = new openapisdk.models.operations.ActionsListSelectedReposForOrgSecretResponse() {{
            actionsListSelectedReposForOrgSecret200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListSelectedReposForOrgSecret200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListSelectedReposForOrgSecret200ApplicationJson.class);
                res.actionsListSelectedReposForOrgSecret200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListSelectedRepositoriesEnabledGithubActionsOrganization - List selected repositories enabled for GitHub Actions in an organization
     *
     * Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse actionsListSelectedRepositoriesEnabledGithubActionsOrganization(openapisdk.models.operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/permissions/repositories", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse res = new openapisdk.models.operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse() {{
            actionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson.class);
                res.actionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListSelfHostedRunnerGroupsForOrg - List self-hosted runner groups for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     * 
     * Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsListSelfHostedRunnerGroupsForOrgResponse actionsListSelfHostedRunnerGroupsForOrg(openapisdk.models.operations.ActionsListSelfHostedRunnerGroupsForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runner-groups", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListSelfHostedRunnerGroupsForOrgResponse res = new openapisdk.models.operations.ActionsListSelfHostedRunnerGroupsForOrgResponse() {{
            actionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson.class);
                res.actionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListSelfHostedRunnersForOrg - List self-hosted runners for an organization
     *
     * Lists all self-hosted runners configured in an organization.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsListSelfHostedRunnersForOrgResponse actionsListSelfHostedRunnersForOrg(openapisdk.models.operations.ActionsListSelfHostedRunnersForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runners", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListSelfHostedRunnersForOrgResponse res = new openapisdk.models.operations.ActionsListSelfHostedRunnersForOrgResponse() {{
            actionsListSelfHostedRunnersForOrg200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListSelfHostedRunnersForOrg200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListSelfHostedRunnersForOrg200ApplicationJson.class);
                res.actionsListSelfHostedRunnersForOrg200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListSelfHostedRunnersForRepo - List self-hosted runners for a repository
     *
     * Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.ActionsListSelfHostedRunnersForRepoResponse actionsListSelfHostedRunnersForRepo(openapisdk.models.operations.ActionsListSelfHostedRunnersForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runners", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListSelfHostedRunnersForRepoResponse res = new openapisdk.models.operations.ActionsListSelfHostedRunnersForRepoResponse() {{
            actionsListSelfHostedRunnersForRepo200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListSelfHostedRunnersForRepo200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListSelfHostedRunnersForRepo200ApplicationJson.class);
                res.actionsListSelfHostedRunnersForRepo200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListSelfHostedRunnersInGroupForOrg - List self-hosted runners in a group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     * 
     * Lists self-hosted runners that are in a specific organization group.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsListSelfHostedRunnersInGroupForOrgResponse actionsListSelfHostedRunnersInGroupForOrg(openapisdk.models.operations.ActionsListSelfHostedRunnersInGroupForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListSelfHostedRunnersInGroupForOrgResponse res = new openapisdk.models.operations.ActionsListSelfHostedRunnersInGroupForOrgResponse() {{
            actionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJson.class);
                res.actionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListWorkflowRunArtifacts - List workflow run artifacts
     *
     * Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-workflow-run-artifacts - API method documentation
    **/
    public openapisdk.models.operations.ActionsListWorkflowRunArtifactsResponse actionsListWorkflowRunArtifacts(openapisdk.models.operations.ActionsListWorkflowRunArtifactsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListWorkflowRunArtifactsResponse res = new openapisdk.models.operations.ActionsListWorkflowRunArtifactsResponse() {{
            actionsListWorkflowRunArtifacts200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListWorkflowRunArtifacts200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListWorkflowRunArtifacts200ApplicationJson.class);
                res.actionsListWorkflowRunArtifacts200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListWorkflowRuns - List workflow runs
     *
     * List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
     * 
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
     *
     * https://docs.github.com/rest/reference/actions#list-workflow-runs - API method documentation
    **/
    public openapisdk.models.operations.ActionsListWorkflowRunsResponse actionsListWorkflowRuns(openapisdk.models.operations.ActionsListWorkflowRunsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListWorkflowRunsResponse res = new openapisdk.models.operations.ActionsListWorkflowRunsResponse() {{
            actionsListWorkflowRuns200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListWorkflowRuns200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListWorkflowRuns200ApplicationJson.class);
                res.actionsListWorkflowRuns200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsListWorkflowRunsForRepo - List workflow runs for a repository
     *
     * Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
     * 
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#list-workflow-runs-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.ActionsListWorkflowRunsForRepoResponse actionsListWorkflowRunsForRepo(openapisdk.models.operations.ActionsListWorkflowRunsForRepoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsListWorkflowRunsForRepoResponse res = new openapisdk.models.operations.ActionsListWorkflowRunsForRepoResponse() {{
            actionsListWorkflowRunsForRepo200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ActionsListWorkflowRunsForRepo200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ActionsListWorkflowRunsForRepo200ApplicationJson.class);
                res.actionsListWorkflowRunsForRepo200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsReRunWorkflow - Re-run a workflow
     *
     * Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#re-run-a-workflow - API method documentation
    **/
    public openapisdk.models.operations.ActionsReRunWorkflowResponse actionsReRunWorkflow(openapisdk.models.operations.ActionsReRunWorkflowRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsReRunWorkflowResponse res = new openapisdk.models.operations.ActionsReRunWorkflowResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }

        return res;
    }
	
	
    /**
     * actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg - Remove repository access to a self-hosted runner group in an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     * 
     * 
     * Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg(openapisdk.models.operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse res = new openapisdk.models.operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsRemoveSelectedRepoFromOrgSecret - Remove selected repository from an organization secret
     *
     * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret - API method documentation
    **/
    public openapisdk.models.operations.ActionsRemoveSelectedRepoFromOrgSecretResponse actionsRemoveSelectedRepoFromOrgSecret(openapisdk.models.operations.ActionsRemoveSelectedRepoFromOrgSecretRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsRemoveSelectedRepoFromOrgSecretResponse res = new openapisdk.models.operations.ActionsRemoveSelectedRepoFromOrgSecretResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 409) {
        }

        return res;
    }
	
	
    /**
     * actionsRemoveSelfHostedRunnerFromGroupForOrg - Remove a self-hosted runner from a group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     * 
     * 
     * Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse actionsRemoveSelfHostedRunnerFromGroupForOrg(openapisdk.models.operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse res = new openapisdk.models.operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsReviewPendingDeploymentsForRun - Review pending deployments for a workflow run
     *
     * Approve or reject pending deployments that are waiting on approval by a required reviewer.
     * 
     * Anyone with read access to the repository contents and deployments can use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#review-pending-deployments-for-a-workflow-run - API method documentation
    **/
    public openapisdk.models.operations.ActionsReviewPendingDeploymentsForRunResponse actionsReviewPendingDeploymentsForRun(openapisdk.models.operations.ActionsReviewPendingDeploymentsForRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsReviewPendingDeploymentsForRunResponse res = new openapisdk.models.operations.ActionsReviewPendingDeploymentsForRunResponse() {{
            deployments = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Deployment[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Deployment[].class);
                res.deployments = out;
            }
        }

        return res;
    }
	
	
    /**
     * actionsSetAllowedActionsOrganization - Set allowed actions for an organization
     *
     * Sets the actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     * 
     * If the organization belongs to an enterprise that has `selected` actions set at the enterprise level, then you cannot override any of the enterprise's allowed actions settings.
     * 
     * To use the `patterns_allowed` setting for private repositories, the organization must belong to an enterprise. If the organization does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories in the organization.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#set-allowed-actions-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsSetAllowedActionsOrganizationResponse actionsSetAllowedActionsOrganization(openapisdk.models.operations.ActionsSetAllowedActionsOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/permissions/selected-actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsSetAllowedActionsOrganizationResponse res = new openapisdk.models.operations.ActionsSetAllowedActionsOrganizationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsSetAllowedActionsRepository - Set allowed actions for a repository
     *
     * Sets the actions that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
     * 
     * If the repository belongs to an organization or enterprise that has `selected` actions set at the organization or enterprise levels, then you cannot override any of the allowed actions settings.
     * 
     * To use the `patterns_allowed` setting for private repositories, the repository must belong to an enterprise. If the repository does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories.
     * 
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#set-allowed-actions-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.ActionsSetAllowedActionsRepositoryResponse actionsSetAllowedActionsRepository(openapisdk.models.operations.ActionsSetAllowedActionsRepositoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/permissions/selected-actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsSetAllowedActionsRepositoryResponse res = new openapisdk.models.operations.ActionsSetAllowedActionsRepositoryResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsSetGithubActionsPermissionsOrganization - Set GitHub Actions permissions for an organization
     *
     * Sets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
     * 
     * If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions, then you cannot override them for the organization.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsSetGithubActionsPermissionsOrganizationResponse actionsSetGithubActionsPermissionsOrganization(openapisdk.models.operations.ActionsSetGithubActionsPermissionsOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/permissions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsSetGithubActionsPermissionsOrganizationResponse res = new openapisdk.models.operations.ActionsSetGithubActionsPermissionsOrganizationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsSetGithubActionsPermissionsRepository - Set GitHub Actions permissions for a repository
     *
     * Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions in the repository.
     * 
     * If the repository belongs to an organization or enterprise that has set restrictive permissions at the organization or enterprise levels, such as `allowed_actions` to `selected` actions, then you cannot override them for the repository.
     * 
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-a-repository - API method documentation
    **/
    public openapisdk.models.operations.ActionsSetGithubActionsPermissionsRepositoryResponse actionsSetGithubActionsPermissionsRepository(openapisdk.models.operations.ActionsSetGithubActionsPermissionsRepositoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/repos/{owner}/{repo}/actions/permissions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsSetGithubActionsPermissionsRepositoryResponse res = new openapisdk.models.operations.ActionsSetGithubActionsPermissionsRepositoryResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsSetRepoAccessToSelfHostedRunnerGroupInOrg - Set repository access for a self-hosted runner group in an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     * 
     * Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse actionsSetRepoAccessToSelfHostedRunnerGroupInOrg(openapisdk.models.operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse res = new openapisdk.models.operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsSetSelectedReposForOrgSecret - Set selected repositories for an organization secret
     *
     * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret - API method documentation
    **/
    public openapisdk.models.operations.ActionsSetSelectedReposForOrgSecretResponse actionsSetSelectedReposForOrgSecret(openapisdk.models.operations.ActionsSetSelectedReposForOrgSecretRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/secrets/{secret_name}/repositories", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsSetSelectedReposForOrgSecretResponse res = new openapisdk.models.operations.ActionsSetSelectedReposForOrgSecretResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsSetSelectedRepositoriesEnabledGithubActionsOrganization - Set selected repositories enabled for GitHub Actions in an organization
     *
     * Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * https://docs.github.com/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse actionsSetSelectedRepositoriesEnabledGithubActionsOrganization(openapisdk.models.operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/permissions/repositories", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse res = new openapisdk.models.operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsSetSelfHostedRunnersInGroupForOrg - Set self-hosted runners in a group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     * 
     * Replaces the list of self-hosted runners that are part of an organization runner group.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsSetSelfHostedRunnersInGroupForOrgResponse actionsSetSelfHostedRunnersInGroupForOrg(openapisdk.models.operations.ActionsSetSelfHostedRunnersInGroupForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runner-groups/{runner_group_id}/runners", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsSetSelfHostedRunnersInGroupForOrgResponse res = new openapisdk.models.operations.ActionsSetSelfHostedRunnersInGroupForOrgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * actionsUpdateSelfHostedRunnerGroupForOrg - Update a self-hosted runner group for an organization
     *
     * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
     * 
     * Updates the `name` and `visibility` of a self-hosted runner group in an organization.
     * 
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization - API method documentation
    **/
    public openapisdk.models.operations.ActionsUpdateSelfHostedRunnerGroupForOrgResponse actionsUpdateSelfHostedRunnerGroupForOrg(openapisdk.models.operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/orgs/{org}/actions/runner-groups/{runner_group_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ActionsUpdateSelfHostedRunnerGroupForOrgResponse res = new openapisdk.models.operations.ActionsUpdateSelfHostedRunnerGroupForOrgResponse() {{
            runnerGroupsOrg = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RunnerGroupsOrg out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RunnerGroupsOrg.class);
                res.runnerGroupsOrg = out;
            }
        }

        return res;
    }
	
}