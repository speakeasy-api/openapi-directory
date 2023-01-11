import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stage_enum as shared_stage_enum


@dataclass_json
@dataclasses.dataclass
class Branch:
    r"""Branch
     The branch for an Amplify app, which maps to a third-party repository branch. 
    """
    
    active_job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeJobId') }})
    branch_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchArn') }})
    branch_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchName') }})
    create_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_domains: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDomains') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enable_auto_build: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutoBuild') }})
    enable_basic_auth: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBasicAuth') }})
    enable_notification: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableNotification') }})
    enable_pull_request_preview: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePullRequestPreview') }})
    environment_variables: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    framework: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('framework') }})
    stage: shared_stage_enum.StageEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    total_number_of_jobs: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalNumberOfJobs') }})
    ttl: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    update_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    associated_resources: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedResources') }})
    backend_environment_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendEnvironmentArn') }})
    basic_auth_credentials: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    build_spec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildSpec') }})
    destination_branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationBranch') }})
    enable_performance_mode: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePerformanceMode') }})
    pull_request_environment_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullRequestEnvironmentName') }})
    source_branch: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceBranch') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thumbnail_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUrl') }})
    
