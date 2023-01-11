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

public class EnterpriseAdmin {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public EnterpriseAdmin(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise - Add organization access to a self-hosted runner group in an enterprise
     *
     * Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse enterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise(openapisdk.models.operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise - Add a self-hosted runner to a group for an enterprise
     *
     * Adds a self-hosted runner to a runner group configured in an enterprise.
     * 
     * You must authenticate using an access token with the `admin:enterprise`
     * scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#add-a-self-hosted-runner-to-a-group-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse enterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(openapisdk.models.operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminCreateRegistrationTokenForEnterprise - Create a registration token for an enterprise
     *
     * Returns a token that you can pass to the `config` script. The token expires after one hour.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     * 
     * #### Example using registration token
     * 
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     * 
     * ```
     * ./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
     * ```
     *
     * https://docs.github.com/rest/reference/enterprise-admin#create-a-registration-token-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse enterpriseAdminCreateRegistrationTokenForEnterprise(openapisdk.models.operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runners/registration-token", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse() {{
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
     * enterpriseAdminCreateRemoveTokenForEnterprise - Create a remove token for an enterprise
     *
     * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     * 
     * #### Example using remove token
     * 
     * To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
     * endpoint.
     * 
     * ```
     * ./config.sh remove --token TOKEN
     * ```
     *
     * https://docs.github.com/rest/reference/enterprise-admin#create-a-remove-token-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse enterpriseAdminCreateRemoveTokenForEnterprise(openapisdk.models.operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runners/remove-token", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse() {{
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
     * enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise - Create a self-hosted runner group for an enterprise
     *
     * Creates a new self-hosted runner group for an enterprise.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#create-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse enterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(openapisdk.models.operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runner-groups", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse() {{
            runnerGroupsEnterprise = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RunnerGroupsEnterprise out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RunnerGroupsEnterprise.class);
                res.runnerGroupsEnterprise = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminDeleteScimGroupFromEnterprise - Delete a SCIM group from an enterprise
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-group-from-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminDeleteScimGroupFromEnterpriseResponse enterpriseAdminDeleteScimGroupFromEnterprise(openapisdk.models.operations.EnterpriseAdminDeleteScimGroupFromEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminDeleteScimGroupFromEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminDeleteScimGroupFromEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminDeleteSelfHostedRunnerFromEnterprise - Delete a self-hosted runner from an enterprise
     *
     * Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#delete-self-hosted-runner-from-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse enterpriseAdminDeleteSelfHostedRunnerFromEnterprise(openapisdk.models.operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runners/{runner_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise - Delete a self-hosted runner group from an enterprise
     *
     * Deletes a self-hosted runner group for an enterprise.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#delete-a-self-hosted-runner-group-from-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse enterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(openapisdk.models.operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminDeleteUserFromEnterprise - Delete a SCIM user from an enterprise
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-user-from-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminDeleteUserFromEnterpriseResponse enterpriseAdminDeleteUserFromEnterprise(openapisdk.models.operations.EnterpriseAdminDeleteUserFromEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminDeleteUserFromEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminDeleteUserFromEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise - Disable a selected organization for GitHub Actions in an enterprise
     *
     * Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#disable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(openapisdk.models.operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise - Enable a selected organization for GitHub Actions in an enterprise
     *
     * Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#enable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(openapisdk.models.operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetAllowedActionsEnterprise - Get allowed actions for an enterprise
     *
     * Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-allowed-actions-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse enterpriseAdminGetAllowedActionsEnterprise(openapisdk.models.operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/permissions/selected-actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse() {{
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
     * enterpriseAdminGetGithubActionsPermissionsEnterprise - Get GitHub Actions permissions for an enterprise
     *
     * Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-github-actions-permissions-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse enterpriseAdminGetGithubActionsPermissionsEnterprise(openapisdk.models.operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/permissions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse() {{
            actionsEnterprisePermissions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ActionsEnterprisePermissions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ActionsEnterprisePermissions.class);
                res.actionsEnterprisePermissions = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetProvisioningInformationForEnterpriseGroup - Get SCIM provisioning information for an enterprise group
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-group - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse enterpriseAdminGetProvisioningInformationForEnterpriseGroup(openapisdk.models.operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", request.pathParams);
        
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

        openapisdk.models.operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse res = new openapisdk.models.operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse() {{
            scimEnterpriseGroup = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScimEnterpriseGroup out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScimEnterpriseGroup.class);
                res.scimEnterpriseGroup = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetProvisioningInformationForEnterpriseUser - Get SCIM provisioning information for an enterprise user
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-user - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse enterpriseAdminGetProvisioningInformationForEnterpriseUser(openapisdk.models.operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse res = new openapisdk.models.operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse() {{
            scimEnterpriseUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScimEnterpriseUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScimEnterpriseUser.class);
                res.scimEnterpriseUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminGetSelfHostedRunnerForEnterprise - Get a self-hosted runner for an enterprise
     *
     * Gets a specific self-hosted runner configured in an enterprise.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse enterpriseAdminGetSelfHostedRunnerForEnterprise(openapisdk.models.operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runners/{runner_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse() {{
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
     * enterpriseAdminGetSelfHostedRunnerGroupForEnterprise - Get a self-hosted runner group for an enterprise
     *
     * Gets a specific self-hosted runner group for an enterprise.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse enterpriseAdminGetSelfHostedRunnerGroupForEnterprise(openapisdk.models.operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse() {{
            runnerGroupsEnterprise = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RunnerGroupsEnterprise out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RunnerGroupsEnterprise.class);
                res.runnerGroupsEnterprise = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise - List organization access to a self-hosted runner group in an enterprise
     *
     * Lists the organizations with access to a self-hosted runner group.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(openapisdk.models.operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", request.pathParams);
        
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

        openapisdk.models.operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse() {{
            enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson.class);
                res.enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListProvisionedGroupsEnterprise - List provisioned SCIM groups for an enterprise
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-provisioned-scim-groups-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListProvisionedGroupsEnterpriseResponse enterpriseAdminListProvisionedGroupsEnterprise(openapisdk.models.operations.EnterpriseAdminListProvisionedGroupsEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scim/v2/enterprises/{enterprise}/Groups", request.pathParams);
        
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

        openapisdk.models.operations.EnterpriseAdminListProvisionedGroupsEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminListProvisionedGroupsEnterpriseResponse() {{
            scimGroupListEnterprise = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScimGroupListEnterprise out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScimGroupListEnterprise.class);
                res.scimGroupListEnterprise = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListProvisionedIdentitiesEnterprise - List SCIM provisioned identities for an enterprise
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     * 
     * Retrieves a paginated list of all provisioned enterprise members, including pending invitations.
     * 
     * When a user with a SAML-provisioned external identity leaves (or is removed from) an enterprise, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:
     *   - When a user with a SCIM-provisioned external identity is removed from an enterprise, the account's metadata is preserved to allow the user to re-join the organization in the future.
     *   - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).
     *   - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.
     * 
     * The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:
     * 
     * 1. The user is granted access by the IdP and is not a member of the GitHub enterprise.
     * 
     * 1. The user attempts to access the GitHub enterprise and initiates the SAML SSO process, and is not currently signed in to their GitHub account.
     * 
     * 1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub account:
     *    - If the user signs in, their GitHub account is linked to this entry.
     *    - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub enterprise, and the external identity `null` entry remains in place.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-scim-provisioned-identities-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse enterpriseAdminListProvisionedIdentitiesEnterprise(openapisdk.models.operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scim/v2/enterprises/{enterprise}/Users", request.pathParams);
        
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

        openapisdk.models.operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse() {{
            scimUserListEnterprise = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScimUserListEnterprise out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScimUserListEnterprise.class);
                res.scimUserListEnterprise = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListRunnerApplicationsForEnterprise - List runner applications for an enterprise
     *
     * Lists binaries for the runner application that you can download and run.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-runner-applications-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse enterpriseAdminListRunnerApplicationsForEnterprise(openapisdk.models.operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runners/downloads", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse() {{
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
     * enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise - List selected organizations enabled for GitHub Actions in an enterprise
     *
     * Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise(openapisdk.models.operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/permissions/organizations", request.pathParams);
        
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

        openapisdk.models.operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse() {{
            enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson.class);
                res.enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListSelfHostedRunnerGroupsForEnterprise - List self-hosted runner groups for an enterprise
     *
     * Lists all self-hosted runner groups for an enterprise.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runner-groups-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse enterpriseAdminListSelfHostedRunnerGroupsForEnterprise(openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runner-groups", request.pathParams);
        
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

        openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse() {{
            enterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson.class);
                res.enterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListSelfHostedRunnersForEnterprise - List self-hosted runners for an enterprise
     *
     * Lists all self-hosted runners configured for an enterprise.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse enterpriseAdminListSelfHostedRunnersForEnterprise(openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runners", request.pathParams);
        
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

        openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse() {{
            enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson.class);
                res.enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminListSelfHostedRunnersInGroupForEnterprise - List self-hosted runners in a group for an enterprise
     *
     * Lists the self-hosted runners that are in a specific enterprise group.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse enterpriseAdminListSelfHostedRunnersInGroupForEnterprise(openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", request.pathParams);
        
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

        openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse() {{
            enterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson.class);
                res.enterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminProvisionAndInviteEnterpriseGroup - Provision a SCIM enterprise group and invite users
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     * 
     * Provision an enterprise group, and invite users to the group. This sends invitation emails to the email address of the invited users to join the GitHub organization that the SCIM group corresponds to.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#provision-a-scim-enterprise-group-and-invite-users - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse enterpriseAdminProvisionAndInviteEnterpriseGroup(openapisdk.models.operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scim/v2/enterprises/{enterprise}/Groups", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse res = new openapisdk.models.operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse() {{
            scimEnterpriseGroup = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScimEnterpriseGroup out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScimEnterpriseGroup.class);
                res.scimEnterpriseGroup = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminProvisionAndInviteEnterpriseUser - Provision and invite a SCIM enterprise user
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     * 
     * Provision enterprise membership for a user, and send organization invitation emails to the email address.
     * 
     * You can optionally include the groups a user will be invited to join. If you do not provide a list of `groups`, the user is provisioned for the enterprise, but no organization invitation emails will be sent.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#provision-and-invite-a-scim-enterprise-user - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminProvisionAndInviteEnterpriseUserResponse enterpriseAdminProvisionAndInviteEnterpriseUser(openapisdk.models.operations.EnterpriseAdminProvisionAndInviteEnterpriseUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scim/v2/enterprises/{enterprise}/Users", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminProvisionAndInviteEnterpriseUserResponse res = new openapisdk.models.operations.EnterpriseAdminProvisionAndInviteEnterpriseUserResponse() {{
            scimEnterpriseUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScimEnterpriseUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScimEnterpriseUser.class);
                res.scimEnterpriseUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise - Remove organization access to a self-hosted runner group in an enterprise
     *
     * Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(openapisdk.models.operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise - Remove a self-hosted runner from a group for an enterprise
     *
     * Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#remove-a-self-hosted-runner-from-a-group-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(openapisdk.models.operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminSetAllowedActionsEnterprise - Set allowed actions for an enterprise
     *
     * Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-allowed-actions-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse enterpriseAdminSetAllowedActionsEnterprise(openapisdk.models.operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/permissions/selected-actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminSetGithubActionsPermissionsEnterprise - Set GitHub Actions permissions for an enterprise
     *
     * Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-github-actions-permissions-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse enterpriseAdminSetGithubActionsPermissionsEnterprise(openapisdk.models.operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/permissions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminSetInformationForProvisionedEnterpriseGroup - Set SCIM information for a provisioned enterprise group
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     * 
     * Replaces an existing provisioned group’s information. You must provide all the information required for the group as if you were provisioning it for the first time. Any existing group information that you don't provide will be removed, including group membership. If you want to only update a specific attribute, use the [Update an attribute for a SCIM enterprise group](#update-an-attribute-for-a-scim-enterprise-group) endpoint instead.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-group - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse enterpriseAdminSetInformationForProvisionedEnterpriseGroup(openapisdk.models.operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse res = new openapisdk.models.operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse() {{
            scimEnterpriseGroup = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScimEnterpriseGroup out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScimEnterpriseGroup.class);
                res.scimEnterpriseGroup = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminSetInformationForProvisionedEnterpriseUser - Set SCIM information for a provisioned enterprise user
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     * 
     * Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](#update-an-attribute-for-an-enterprise-scim-user) endpoint instead.
     * 
     * You must at least provide the required values for the user: `userName`, `name`, and `emails`.
     * 
     * **Warning:** Setting `active: false` removes the user from the enterprise, deletes the external identity, and deletes the associated `{scim_user_id}`.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-user - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse enterpriseAdminSetInformationForProvisionedEnterpriseUser(openapisdk.models.operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse res = new openapisdk.models.operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse() {{
            scimEnterpriseUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScimEnterpriseUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScimEnterpriseUser.class);
                res.scimEnterpriseUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise - Set organization access for a self-hosted runner group in an enterprise
     *
     * Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse enterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise(openapisdk.models.operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise - Set selected organizations enabled for GitHub Actions in an enterprise
     *
     * Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise(openapisdk.models.operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/permissions/organizations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise - Set self-hosted runners in a group for an enterprise
     *
     * Replaces the list of self-hosted runners that are part of an enterprise runner group.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#set-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse enterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(openapisdk.models.operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUpdateAttributeForEnterpriseGroup - Update an attribute for a SCIM enterprise group
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     * 
     * Allows you to change a provisioned group’s individual attributes. To change a group’s values, you must provide a specific Operations JSON format that contains at least one of the add, remove, or replace operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
     *
     * https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-group - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse enterpriseAdminUpdateAttributeForEnterpriseGroup(openapisdk.models.operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse res = new openapisdk.models.operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse() {{
            scimEnterpriseGroup = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScimEnterpriseGroup out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScimEnterpriseGroup.class);
                res.scimEnterpriseGroup = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUpdateAttributeForEnterpriseUser - Update an attribute for a SCIM enterprise user
     *
     * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
     * 
     * Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
     * 
     * **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work.
     * 
     * **Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the enterprise, deletes the external identity, and deletes the associated `:scim_user_id`.
     * 
     * ```
     * {
     *   "Operations":[{
     *     "op":"replace",
     *     "value":{
     *       "active":false
     *     }
     *   }]
     * }
     * ```
     *
     * https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-user - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUpdateAttributeForEnterpriseUserResponse enterpriseAdminUpdateAttributeForEnterpriseUser(openapisdk.models.operations.EnterpriseAdminUpdateAttributeForEnterpriseUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUpdateAttributeForEnterpriseUserResponse res = new openapisdk.models.operations.EnterpriseAdminUpdateAttributeForEnterpriseUserResponse() {{
            scimEnterpriseUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ScimEnterpriseUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ScimEnterpriseUser.class);
                res.scimEnterpriseUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise - Update a self-hosted runner group for an enterprise
     *
     * Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
     * 
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * https://docs.github.com/rest/reference/enterprise-admin#update-a-self-hosted-runner-group-for-an-enterprise - API method documentation
    **/
    public openapisdk.models.operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(openapisdk.models.operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse res = new openapisdk.models.operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse() {{
            runnerGroupsEnterprise = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RunnerGroupsEnterprise out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RunnerGroupsEnterprise.class);
                res.runnerGroupsEnterprise = out;
            }
        }

        return res;
    }
	
}