package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type EnterpriseAdmin struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewEnterpriseAdmin(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *EnterpriseAdmin {
	return &EnterpriseAdmin{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise - Add organization access to a self-hosted runner group in an enterprise
// Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx context.Context, request operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest) (*operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise - Add a self-hosted runner to a group for an enterprise
// Adds a self-hosted runner to a runner group configured in an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise`
// scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#add-a-self-hosted-runner-to-a-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest) (*operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminCreateRegistrationTokenForEnterprise - Create a registration token for an enterprise
// Returns a token that you can pass to the `config` script. The token expires after one hour.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
//
// #### Example using registration token
//
// Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
//
// ```
// ./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
// ```
// https://docs.github.com/rest/reference/enterprise-admin#create-a-registration-token-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminCreateRegistrationTokenForEnterprise(ctx context.Context, request operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest) (*operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runners/registration-token", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AuthenticationToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuthenticationToken = out
		}
	}

	return res, nil
}

// EnterpriseAdminCreateRemoveTokenForEnterprise - Create a remove token for an enterprise
// Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
//
// #### Example using remove token
//
// To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
// endpoint.
//
// ```
// ./config.sh remove --token TOKEN
// ```
// https://docs.github.com/rest/reference/enterprise-admin#create-a-remove-token-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminCreateRemoveTokenForEnterprise(ctx context.Context, request operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest) (*operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runners/remove-token", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AuthenticationToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuthenticationToken = out
		}
	}

	return res, nil
}

// EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise - Create a self-hosted runner group for an enterprise
// Creates a new self-hosted runner group for an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#create-self-hosted-runner-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest) (*operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RunnerGroupsEnterprise
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerGroupsEnterprise = out
		}
	}

	return res, nil
}

// EnterpriseAdminDeleteScimGroupFromEnterprise - Delete a SCIM group from an enterprise
// **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
// https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-group-from-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDeleteScimGroupFromEnterprise(ctx context.Context, request operations.EnterpriseAdminDeleteScimGroupFromEnterpriseRequest) (*operations.EnterpriseAdminDeleteScimGroupFromEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminDeleteScimGroupFromEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise - Delete a self-hosted runner from an enterprise
// Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#delete-self-hosted-runner-from-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDeleteSelfHostedRunnerFromEnterprise(ctx context.Context, request operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest) (*operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runners/{runner_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise - Delete a self-hosted runner group from an enterprise
// Deletes a self-hosted runner group for an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#delete-a-self-hosted-runner-group-from-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprise(ctx context.Context, request operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest) (*operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminDeleteUserFromEnterprise - Delete a SCIM user from an enterprise
// **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
// https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-user-from-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDeleteUserFromEnterprise(ctx context.Context, request operations.EnterpriseAdminDeleteUserFromEnterpriseRequest) (*operations.EnterpriseAdminDeleteUserFromEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminDeleteUserFromEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise - Disable a selected organization for GitHub Actions in an enterprise
// Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#disable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(ctx context.Context, request operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest) (*operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise - Enable a selected organization for GitHub Actions in an enterprise
// Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#enable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(ctx context.Context, request operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest) (*operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminGetAllowedActionsEnterprise - Get allowed actions for an enterprise
// Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#get-allowed-actions-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetAllowedActionsEnterprise(ctx context.Context, request operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest) (*operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions/selected-actions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SelectedActions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SelectedActions = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetGithubActionsPermissionsEnterprise - Get GitHub Actions permissions for an enterprise
// Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#get-github-actions-permissions-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetGithubActionsPermissionsEnterprise(ctx context.Context, request operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest) (*operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ActionsEnterprisePermissions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsEnterprisePermissions = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetProvisioningInformationForEnterpriseGroup - Get SCIM provisioning information for an enterprise group
// **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
// https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-group - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetProvisioningInformationForEnterpriseGroup(ctx context.Context, request operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest) (*operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScimEnterpriseGroup
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScimEnterpriseGroup = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetProvisioningInformationForEnterpriseUser - Get SCIM provisioning information for an enterprise user
// **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
// https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-user - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetProvisioningInformationForEnterpriseUser(ctx context.Context, request operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest) (*operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScimEnterpriseUser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScimEnterpriseUser = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetSelfHostedRunnerForEnterprise - Get a self-hosted runner for an enterprise
// Gets a specific self-hosted runner configured in an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetSelfHostedRunnerForEnterprise(ctx context.Context, request operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest) (*operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runners/{runner_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Runner
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Runner = out
		}
	}

	return res, nil
}

// EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise - Get a self-hosted runner group for an enterprise
// Gets a specific self-hosted runner group for an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminGetSelfHostedRunnerGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest) (*operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RunnerGroupsEnterprise
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerGroupsEnterprise = out
		}
	}

	return res, nil
}

// EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise - List organization access to a self-hosted runner group in an enterprise
// Lists the organizations with access to a self-hosted runner group.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx context.Context, request operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest) (*operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminListProvisionedGroupsEnterprise - List provisioned SCIM groups for an enterprise
// **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
// https://docs.github.com/rest/reference/enterprise-admin#list-provisioned-scim-groups-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListProvisionedGroupsEnterprise(ctx context.Context, request operations.EnterpriseAdminListProvisionedGroupsEnterpriseRequest) (*operations.EnterpriseAdminListProvisionedGroupsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/scim/v2/enterprises/{enterprise}/Groups", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminListProvisionedGroupsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScimGroupListEnterprise
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScimGroupListEnterprise = out
		}
	}

	return res, nil
}

// EnterpriseAdminListProvisionedIdentitiesEnterprise - List SCIM provisioned identities for an enterprise
// **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
//
// Retrieves a paginated list of all provisioned enterprise members, including pending invitations.
//
// When a user with a SAML-provisioned external identity leaves (or is removed from) an enterprise, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:
//   - When a user with a SCIM-provisioned external identity is removed from an enterprise, the account's metadata is preserved to allow the user to re-join the organization in the future.
//   - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).
//   - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.
//
// The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:
//
// 1. The user is granted access by the IdP and is not a member of the GitHub enterprise.
//
// 1. The user attempts to access the GitHub enterprise and initiates the SAML SSO process, and is not currently signed in to their GitHub account.
//
// 1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub account:
//   - If the user signs in, their GitHub account is linked to this entry.
//   - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub enterprise, and the external identity `null` entry remains in place.
//
// https://docs.github.com/rest/reference/enterprise-admin#list-scim-provisioned-identities-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListProvisionedIdentitiesEnterprise(ctx context.Context, request operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest) (*operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/scim/v2/enterprises/{enterprise}/Users", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScimUserListEnterprise
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScimUserListEnterprise = out
		}
	}

	return res, nil
}

// EnterpriseAdminListRunnerApplicationsForEnterprise - List runner applications for an enterprise
// Lists binaries for the runner application that you can download and run.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#list-runner-applications-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListRunnerApplicationsForEnterprise(ctx context.Context, request operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest) (*operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runners/downloads", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RunnerApplication
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerApplications = out
		}
	}

	return res, nil
}

// EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise - List selected organizations enabled for GitHub Actions in an enterprise
// Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#list-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise(ctx context.Context, request operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest) (*operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions/organizations", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise - List self-hosted runner groups for an enterprise
// Lists all self-hosted runner groups for an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runner-groups-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise(ctx context.Context, request operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest) (*operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminListSelfHostedRunnersForEnterprise - List self-hosted runners for an enterprise
// Lists all self-hosted runners configured for an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListSelfHostedRunnersForEnterprise(ctx context.Context, request operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest) (*operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runners", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise - List self-hosted runners in a group for an enterprise
// Lists the self-hosted runners that are in a specific enterprise group.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest) (*operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// EnterpriseAdminProvisionAndInviteEnterpriseGroup - Provision a SCIM enterprise group and invite users
// **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
//
// Provision an enterprise group, and invite users to the group. This sends invitation emails to the email address of the invited users to join the GitHub organization that the SCIM group corresponds to.
// https://docs.github.com/rest/reference/enterprise-admin#provision-a-scim-enterprise-group-and-invite-users - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminProvisionAndInviteEnterpriseGroup(ctx context.Context, request operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest) (*operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/scim/v2/enterprises/{enterprise}/Groups", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScimEnterpriseGroup
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScimEnterpriseGroup = out
		}
	}

	return res, nil
}

// EnterpriseAdminProvisionAndInviteEnterpriseUser - Provision and invite a SCIM enterprise user
// **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
//
// Provision enterprise membership for a user, and send organization invitation emails to the email address.
//
// You can optionally include the groups a user will be invited to join. If you do not provide a list of `groups`, the user is provisioned for the enterprise, but no organization invitation emails will be sent.
// https://docs.github.com/rest/reference/enterprise-admin#provision-and-invite-a-scim-enterprise-user - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminProvisionAndInviteEnterpriseUser(ctx context.Context, request operations.EnterpriseAdminProvisionAndInviteEnterpriseUserRequest) (*operations.EnterpriseAdminProvisionAndInviteEnterpriseUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/scim/v2/enterprises/{enterprise}/Users", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminProvisionAndInviteEnterpriseUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScimEnterpriseUser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScimEnterpriseUser = out
		}
	}

	return res, nil
}

// EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise - Remove organization access to a self-hosted runner group in an enterprise
// Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx context.Context, request operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest) (*operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise - Remove a self-hosted runner from a group for an enterprise
// Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#remove-a-self-hosted-runner-from-a-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest) (*operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminSetAllowedActionsEnterprise - Set allowed actions for an enterprise
// Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#set-allowed-actions-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSetAllowedActionsEnterprise(ctx context.Context, request operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest) (*operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions/selected-actions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminSetGithubActionsPermissionsEnterprise - Set GitHub Actions permissions for an enterprise
// Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#set-github-actions-permissions-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSetGithubActionsPermissionsEnterprise(ctx context.Context, request operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest) (*operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminSetInformationForProvisionedEnterpriseGroup - Set SCIM information for a provisioned enterprise group
// **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
//
// Replaces an existing provisioned group’s information. You must provide all the information required for the group as if you were provisioning it for the first time. Any existing group information that you don't provide will be removed, including group membership. If you want to only update a specific attribute, use the [Update an attribute for a SCIM enterprise group](#update-an-attribute-for-a-scim-enterprise-group) endpoint instead.
// https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-group - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSetInformationForProvisionedEnterpriseGroup(ctx context.Context, request operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest) (*operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScimEnterpriseGroup
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScimEnterpriseGroup = out
		}
	}

	return res, nil
}

// EnterpriseAdminSetInformationForProvisionedEnterpriseUser - Set SCIM information for a provisioned enterprise user
// **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
//
// Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](#update-an-attribute-for-an-enterprise-scim-user) endpoint instead.
//
// You must at least provide the required values for the user: `userName`, `name`, and `emails`.
//
// **Warning:** Setting `active: false` removes the user from the enterprise, deletes the external identity, and deletes the associated `{scim_user_id}`.
// https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-user - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSetInformationForProvisionedEnterpriseUser(ctx context.Context, request operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest) (*operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScimEnterpriseUser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScimEnterpriseUser = out
		}
	}

	return res, nil
}

// EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise - Set organization access for a self-hosted runner group in an enterprise
// Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprise(ctx context.Context, request operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest) (*operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise - Set selected organizations enabled for GitHub Actions in an enterprise
// Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#set-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise(ctx context.Context, request operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest) (*operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/permissions/organizations", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise - Set self-hosted runners in a group for an enterprise
// Replaces the list of self-hosted runners that are part of an enterprise runner group.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#set-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest) (*operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// EnterpriseAdminUpdateAttributeForEnterpriseGroup - Update an attribute for a SCIM enterprise group
// **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
//
// Allows you to change a provisioned group’s individual attributes. To change a group’s values, you must provide a specific Operations JSON format that contains at least one of the add, remove, or replace operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
// https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-group - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpdateAttributeForEnterpriseGroup(ctx context.Context, request operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest) (*operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScimEnterpriseGroup
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScimEnterpriseGroup = out
		}
	}

	return res, nil
}

// EnterpriseAdminUpdateAttributeForEnterpriseUser - Update an attribute for a SCIM enterprise user
// **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
//
// Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
//
// **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work.
//
// **Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the enterprise, deletes the external identity, and deletes the associated `:scim_user_id`.
//
// ```
//
//	{
//	  "Operations":[{
//	    "op":"replace",
//	    "value":{
//	      "active":false
//	    }
//	  }]
//	}
//
// ```
// https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-user - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpdateAttributeForEnterpriseUser(ctx context.Context, request operations.EnterpriseAdminUpdateAttributeForEnterpriseUserRequest) (*operations.EnterpriseAdminUpdateAttributeForEnterpriseUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminUpdateAttributeForEnterpriseUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ScimEnterpriseUser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ScimEnterpriseUser = out
		}
	}

	return res, nil
}

// EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise - Update a self-hosted runner group for an enterprise
// Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
//
// You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
// https://docs.github.com/rest/reference/enterprise-admin#update-a-self-hosted-runner-group-for-an-enterprise - API method documentation
func (s *EnterpriseAdmin) EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(ctx context.Context, request operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest) (*operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RunnerGroupsEnterprise
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunnerGroupsEnterprise = out
		}
	}

	return res, nil
}
