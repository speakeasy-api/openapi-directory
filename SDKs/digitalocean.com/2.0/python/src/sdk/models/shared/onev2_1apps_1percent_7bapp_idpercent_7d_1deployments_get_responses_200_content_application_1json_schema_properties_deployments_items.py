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


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_commit_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_commit_hash') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum(str, Enum):
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
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    ERROR = "ERROR"
    SUCCESS = "SUCCESS"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle:
    component_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('component_name') }})
    ended_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ended_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message_base: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_base') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    started_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    steps: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress:
    error_steps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_steps') }})
    pending_steps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending_steps') }})
    running_steps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('running_steps') }})
    steps: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    success_steps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success_steps') }})
    summary_steps: Optional[list[shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_progress_properties_steps_items.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary_steps') }})
    total_steps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_steps') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_commit_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_commit_hash') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum(str, Enum):
    UNSET = "UNSET"
    MYSQL = "MYSQL"
    PG = "PG"
    REDIS = "REDIS"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    cluster_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster_name') }})
    db_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db_name') }})
    db_user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db_user') }})
    engine: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    production: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('production') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    DEFAULT = "DEFAULT"
    PRIMARY = "PRIMARY"
    ALIAS = "ALIAS"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    wildcard: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wildcard') }})
    zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs:
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    scope: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGit:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    repo_clone_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo_clone_url') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGithub:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGitlab:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage:
    registry: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry') }})
    registry_type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry_type') }})
    repository: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum(str, Enum):
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

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsKindEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    PRE_DEPLOY = "PRE_DEPLOY"
    POST_DEPLOY = "POST_DEPLOY"
    FAILED_DEPLOY = "FAILED_DEPLOY"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    build_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_command') }})
    dockerfile_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerfile_path') }})
    environment_slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment_slug') }})
    envs: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envs') }})
    git: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    github: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGithub] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github') }})
    gitlab: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGitlab] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlab') }})
    image: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_count') }})
    instance_size_slug: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_size_slug') }})
    kind: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsKindEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    run_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_command') }})
    source_dir: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_dir') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum(str, Enum):
    AMS = "ams"
    NYC = "nyc"
    FRA = "fra"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCorsAllowOrigins:
    exact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exact') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    regex: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCors:
    allow_credentials: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_credentials') }})
    allow_headers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_headers') }})
    allow_methods: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_methods') }})
    allow_origins: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCorsAllowOrigins]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_origins') }})
    expose_headers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expose_headers') }})
    max_age: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_age') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs:
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    scope: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGit:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    repo_clone_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo_clone_url') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGithub:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGitlab:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesHealthCheck:
    failure_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failure_threshold') }})
    http_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_path') }})
    initial_delay_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initial_delay_seconds') }})
    period_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period_seconds') }})
    success_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success_threshold') }})
    timeout_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout_seconds') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImage:
    registry: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry') }})
    registry_type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry_type') }})
    repository: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum(str, Enum):
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
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHTTPTrafficToAComponent:
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    build_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_command') }})
    cors: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cors') }})
    dockerfile_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerfile_path') }})
    environment_slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment_slug') }})
    envs: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envs') }})
    git: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    github: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGithub] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github') }})
    gitlab: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGitlab] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlab') }})
    health_check: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesHealthCheck] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_check') }})
    http_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_port') }})
    image: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_count') }})
    instance_size_slug: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_size_slug') }})
    internal_ports: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internal_ports') }})
    routes: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHTTPTrafficToAComponent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    run_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_command') }})
    source_dir: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_dir') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvs:
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    scope: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGit:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    repo_clone_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo_clone_url') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGithub:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGitlab:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImage:
    registry: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry') }})
    registry_type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImageRegistryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry_type') }})
    repository: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    build_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_command') }})
    catchall_document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catchall_document') }})
    cors: Optional[shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_cors.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cors') }})
    dockerfile_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerfile_path') }})
    environment_slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment_slug') }})
    envs: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envs') }})
    error_document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_document') }})
    git: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    github: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGithub] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github') }})
    gitlab: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGitlab] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlab') }})
    image: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    index_document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index_document') }})
    output_dir: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output_dir') }})
    routes: Optional[list[shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_services_items_allof_2_properties_routes_items.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    run_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_command') }})
    source_dir: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_dir') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsScopeEnum(str, Enum):
    UNSET = "UNSET"
    RUN_TIME = "RUN_TIME"
    BUILD_TIME = "BUILD_TIME"
    RUN_AND_BUILD_TIME = "RUN_AND_BUILD_TIME"

class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsTypeEnum(str, Enum):
    GENERAL = "GENERAL"
    SECRET = "SECRET"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvs:
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    scope: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGit:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    repo_clone_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo_clone_url') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGithub:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGitlab:
    branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    deploy_on_push: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploy_on_push') }})
    repo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImageRegistryTypeEnum(str, Enum):
    DOCKER_HUB = "DOCKER_HUB"
    DOCR = "DOCR"


@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImage:
    registry: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry') }})
    registry_type: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImageRegistryTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry_type') }})
    repository: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum(str, Enum):
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
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    build_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_command') }})
    dockerfile_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerfile_path') }})
    environment_slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment_slug') }})
    envs: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envs') }})
    git: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    github: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGithub] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github') }})
    gitlab: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGitlab] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlab') }})
    image: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    instance_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_count') }})
    instance_size_slug: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_size_slug') }})
    run_command: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_command') }})
    source_dir: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_dir') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec:
    r"""Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec
    The desired configuration of an application.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    databases: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databases') }})
    domains: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    jobs: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    region: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    services: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    static_sites: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('static_sites') }})
    workers: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workers') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_commit_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_commit_hash') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_commit_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_commit_hash') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems:
    cause: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    cloned_from: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloned_from') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    jobs: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    phase: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phase') }})
    phase_last_updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phase_last_updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    progress: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    services: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    spec: Optional[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    static_sites: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('static_sites') }})
    tier_slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier_slug') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workers: Optional[list[Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workers') }})
    
