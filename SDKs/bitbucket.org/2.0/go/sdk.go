package sdk

import (
	"net/http"

	"context"
	"fmt"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

var ServerList = []string{
	"https://api.bitbucket.org/2.0",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// SDK Documentation: https://bitbucket.org/api
type SDK struct {
	Addon              *Addon
	BranchRestrictions *BranchRestrictions
	BranchingModel     *BranchingModel
	CommitStatuses     *CommitStatuses
	Commits            *Commits
	Deployments        *Deployments
	Downloads          *Downloads
	IssueTracker       *IssueTracker
	Pipelines          *Pipelines
	Projects           *Projects
	Pullrequests       *Pullrequests
	Refs               *Refs
	Reports            *Reports
	Repositories       *Repositories
	Search             *Search
	Snippets           *Snippets
	Source             *Source
	SSH                *SSH
	Teams              *Teams
	Users              *Users
	Webhooks           *Webhooks
	Workspaces         *Workspaces
	Properties         *Properties

	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	sdk.Addon = NewAddon(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.BranchRestrictions = NewBranchRestrictions(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.BranchingModel = NewBranchingModel(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CommitStatuses = NewCommitStatuses(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Commits = NewCommits(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Deployments = NewDeployments(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Downloads = NewDownloads(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.IssueTracker = NewIssueTracker(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Pipelines = NewPipelines(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Projects = NewProjects(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Pullrequests = NewPullrequests(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Refs = NewRefs(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Reports = NewReports(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Repositories = NewRepositories(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Search = NewSearch(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Snippets = NewSnippets(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Source = NewSource(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.SSH = NewSSH(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Teams = NewTeams(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Users = NewUsers(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Webhooks = NewWebhooks(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Workspaces = NewWorkspaces(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Properties = NewProperties(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	return sdk
}

func (s *SDK) GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}", request.PathParams)

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

	res := &operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
	}

	return res, nil
}

func (s *SDK) GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReports(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports", request.PathParams)

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

	res := &operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
	}

	return res, nil
}

func (s *SDK) GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCases(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases", request.PathParams)

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

	res := &operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
	}

	return res, nil
}

func (s *SDK) GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasons(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons", request.PathParams)

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

	res := &operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
	}

	return res, nil
}

func (s *SDK) GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfiguration(ctx context.Context, request operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRequest) (*operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration", request.PathParams)

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

	res := &operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
	}

	return res, nil
}

func (s *SDK) GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSON(ctx context.Context, request operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONRequest) (*operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/pipelines-config/identity/oidc/keys.json", request.PathParams)

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

	res := &operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
	}

	return res, nil
}
