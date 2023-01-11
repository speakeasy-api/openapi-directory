import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_progress_properties_steps_items as shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_progress_properties_steps_items
from ..shared import onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_cors as shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_cors
from ..shared import onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_routes_items as shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_routes_items
from ..shared import onev2_1account_1keys_get_responses_200_content_application_1json_schema_allof_1_properties_links as shared_onev2_1account_1keys_get_responses_200_content_application_1json_schema_allof_1_properties_links
from ..shared import onev2_1account_1keys_get_responses_200_content_application_1json_schema_allof_2_properties_meta as shared_onev2_1account_1keys_get_responses_200_content_application_1json_schema_allof_2_properties_meta
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListDeploymentsPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDeploymentsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentJobs:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_commit_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_commit_hash') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PENDING_BUILD = "PENDING_BUILD"
    BUILDING = "BUILDING"
    PENDING_DEPLOY = "PENDING_DEPLOY"
    DEPLOYING = "DEPLOYING"
    ACTIVE = "ACTIVE"
    SUPERSEDED = "SUPERSEDED"
    ERROR = "ERROR"
    CANCELED = "CANCELED"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    ERROR = "ERROR"
    SUCCESS = "SUCCESS"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle:
    component_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('component_name') }})
    ended_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ended_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message_base: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_base') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    started_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    steps: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentProgress:
    error_steps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_steps') }})
    pending_steps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending_steps') }})
    running_steps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('running_steps') }})
    steps: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    success_steps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success_steps') }})
    summary_steps: Optional[list[shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_progress_properties_steps_items.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary_steps') }})
    total_steps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_steps') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentServices:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_commit_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_commit_hash') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum(str, Enum):
    UNSET = "UNSET"
    MYSQL = "MYSQL"
    PG = "PG"
    REDIS = "REDIS"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabases:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    cluster_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster_name') }})
    db_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db_name') }})
    db_user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db_user') }})
    engine: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    production: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('production') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    DEFAULT = "DEFAULT"
    PRIMARY = "PRIMARY"
    ALIAS = "ALIAS"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomains:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    wildcard: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wildcard') }})
    zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvs:
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    scope: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGit:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    repo_clone_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo_clone_url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGithub:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGitlab:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImage:
    registry: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry') }})
    registry_type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry_type') }})
    repository: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum(str, Enum):
    BASIC_XXS = "basic-xxs"
    BASIC_XS = "basic-xs"
    BASIC_S = "basic-s"
    BASIC_M = "basic-m"
    PROFESSIONAL_XS = "professional-xs"
    PROFESSIONAL_S = "professional-s"
    PROFESSIONAL_M = "professional-m"
    PROFESSIONAL_1L = "professional-1l"
    PROFESSIONAL_L = "professional-l"
    PROFESSIONAL_XL = "professional-xl"

class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    PRE_DEPLOY = "PRE_DEPLOY"
    POST_DEPLOY = "POST_DEPLOY"
    FAILED_DEPLOY = "FAILED_DEPLOY"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobs:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    build_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_command') }})
    dockerfile_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerfile_path') }})
    environment_slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment_slug') }})
    envs: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envs') }})
    git: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    github: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGithub] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github') }})
    gitlab: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGitlab] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlab') }})
    image: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_count') }})
    instance_size_slug: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_size_slug') }})
    kind: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsKindEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    run_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_command') }})
    source_dir: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_dir') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum(str, Enum):
    AMS = "ams"
    NYC = "nyc"
    FRA = "fra"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesCorsAllowOrigins:
    exact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exact') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    regex: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesCors:
    allow_credentials: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_credentials') }})
    allow_headers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_headers') }})
    allow_methods: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_methods') }})
    allow_origins: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesCorsAllowOrigins]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_origins') }})
    expose_headers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expose_headers') }})
    max_age: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_age') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvs:
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    scope: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGit:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    repo_clone_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo_clone_url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGithub:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGitlab:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesHealthCheck:
    failure_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failure_threshold') }})
    http_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_path') }})
    initial_delay_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initial_delay_seconds') }})
    period_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period_seconds') }})
    success_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success_threshold') }})
    timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout_seconds') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImage:
    registry: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry') }})
    registry_type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry_type') }})
    repository: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum(str, Enum):
    BASIC_XXS = "basic-xxs"
    BASIC_XS = "basic-xs"
    BASIC_S = "basic-s"
    BASIC_M = "basic-m"
    PROFESSIONAL_XS = "professional-xs"
    PROFESSIONAL_S = "professional-s"
    PROFESSIONAL_M = "professional-m"
    PROFESSIONAL_1L = "professional-1l"
    PROFESSIONAL_L = "professional-l"
    PROFESSIONAL_XL = "professional-xl"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesACriterionForRoutingHTTPTrafficToAComponent:
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServices:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    build_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_command') }})
    cors: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesCors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cors') }})
    dockerfile_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerfile_path') }})
    environment_slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment_slug') }})
    envs: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envs') }})
    git: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    github: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGithub] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github') }})
    gitlab: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGitlab] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlab') }})
    health_check: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesHealthCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    http_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_port') }})
    image: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_count') }})
    instance_size_slug: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_size_slug') }})
    internal_ports: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internal_ports') }})
    routes: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesACriterionForRoutingHTTPTrafficToAComponent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    run_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_command') }})
    source_dir: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_dir') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvs:
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    scope: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGit:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    repo_clone_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo_clone_url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGithub:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGitlab:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImage:
    registry: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry') }})
    registry_type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry_type') }})
    repository: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSites:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    build_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_command') }})
    catchall_document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catchall_document') }})
    cors: Optional[shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_cors.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cors') }})
    dockerfile_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerfile_path') }})
    environment_slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment_slug') }})
    envs: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesEnvs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envs') }})
    error_document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_document') }})
    git: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    github: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGithub] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github') }})
    gitlab: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesGitlab] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlab') }})
    image: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSitesImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    index_document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index_document') }})
    output_dir: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output_dir') }})
    routes: Optional[list[shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_routes_items.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    run_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_command') }})
    source_dir: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_dir') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvs:
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    scope: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGit:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    repo_clone_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo_clone_url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGithub:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGitlab:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImage:
    registry: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry') }})
    registry_type: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry_type') }})
    repository: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum(str, Enum):
    BASIC_XXS = "basic-xxs"
    BASIC_XS = "basic-xs"
    BASIC_S = "basic-s"
    BASIC_M = "basic-m"
    PROFESSIONAL_XS = "professional-xs"
    PROFESSIONAL_S = "professional-s"
    PROFESSIONAL_M = "professional-m"
    PROFESSIONAL_1L = "professional-1l"
    PROFESSIONAL_L = "professional-l"
    PROFESSIONAL_XL = "professional-xl"


@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkers:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    build_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_command') }})
    dockerfile_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerfile_path') }})
    environment_slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment_slug') }})
    envs: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersEnvs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envs') }})
    git: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    github: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGithub] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github') }})
    gitlab: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersGitlab] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlab') }})
    image: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_count') }})
    instance_size_slug: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_size_slug') }})
    run_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_command') }})
    source_dir: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_dir') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentAppSpec:
    r"""ListDeployments200ApplicationJSONAnAppDeploymentAppSpec
    The desired configuration of an application.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    databases: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabases]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databases') }})
    domains: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomains]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    jobs: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    region: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    services: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServices]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    static_sites: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSites]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('static_sites') }})
    workers: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workers') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentStaticSites:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_commit_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_commit_hash') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeploymentWorkers:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_commit_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_commit_hash') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSONAnAppDeployment:
    cause: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    cloned_from: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloned_from') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    jobs: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentJobs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    phase: Optional[ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phase') }})
    phase_last_updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phase_last_updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    progress: Optional[ListDeployments200ApplicationJSONAnAppDeploymentProgress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    services: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentServices]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    spec: Optional[ListDeployments200ApplicationJSONAnAppDeploymentAppSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    static_sites: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentStaticSites]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('static_sites') }})
    tier_slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier_slug') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workers: Optional[list[ListDeployments200ApplicationJSONAnAppDeploymentWorkers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workers') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments200ApplicationJSON:
    deployments: Optional[list[ListDeployments200ApplicationJSONAnAppDeployment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments') }})
    links: Optional[shared_onev2_1account_1keys_get_responses_200_content_application_1json_schema_allof_1_properties_links.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[shared_onev2_1account_1keys_get_responses_200_content_application_1json_schema_allof_2_properties_meta.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDeployments401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListDeploymentsRequest:
    path_params: ListDeploymentsPathParams = dataclasses.field()
    query_params: ListDeploymentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDeploymentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_deployments_200_application_json_object: Optional[ListDeployments200ApplicationJSON] = dataclasses.field(default=None)
    list_deployments_401_application_json_object: Optional[ListDeployments401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
