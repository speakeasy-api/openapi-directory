
__doc__ = """ SDK Documentation: https://bitbucket.org/api"""
import requests
from sdk.models import operations
from . import utils


from .addon import Addon
from .branch_restrictions import BranchRestrictions
from .branching_model import BranchingModel
from .commit_statuses import CommitStatuses
from .commits import Commits
from .deployments import Deployments
from .downloads import Downloads
from .issue_tracker import IssueTracker
from .pipelines import Pipelines
from .projects import Projects
from .pullrequests import Pullrequests
from .refs import Refs
from .reports import Reports
from .repositories import Repositories
from .search import Search
from .snippets import Snippets
from .source import Source
from .ssh import SSH
from .teams import Teams
from .users import Users
from .webhooks import Webhooks
from .workspaces import Workspaces
from .properties import Properties


SERVERS = [
	"https://api.bitbucket.org/2.0",
]


class SDK:
    r"""SDK Documentation: https://bitbucket.org/api"""
    addon: Addon
    branch_restrictions: BranchRestrictions
    branching_model: BranchingModel
    commit_statuses: CommitStatuses
    commits: Commits
    deployments: Deployments
    downloads: Downloads
    issue_tracker: IssueTracker
    pipelines: Pipelines
    projects: Projects
    pullrequests: Pullrequests
    refs: Refs
    reports: Reports
    repositories: Repositories
    search: Search
    snippets: Snippets
    source: Source
    ssh: SSH
    teams: Teams
    users: Users
    webhooks: Webhooks
    workspaces: Workspaces
    properties: Properties

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def get_repositories_workspace_repo_slug_pipelines_pipeline_uuid_steps_step_uuid_logs_log_uuid_(self, request: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_repositories_workspace_repo_slug_pipelines_pipeline_uuid_steps_step_uuid_test_reports(self, request: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_repositories_workspace_repo_slug_pipelines_pipeline_uuid_steps_step_uuid_test_reports_test_cases(self, request: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_repositories_workspace_repo_slug_pipelines_pipeline_uuid_steps_step_uuid_test_reports_test_cases_test_case_uuid_test_case_reasons(self, request: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_workspaces_workspace_pipelines_config_identity_oidc_well_known_openid_configuration(self, request: operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRequest) -> operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    
    def get_workspaces_workspace_pipelines_config_identity_oidc_keys_json(self, request: operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONRequest) -> operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/pipelines-config/identity/oidc/keys.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            pass

        return res

    