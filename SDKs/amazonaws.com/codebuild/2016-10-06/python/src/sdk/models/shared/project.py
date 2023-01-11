import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectartifacts as shared_projectartifacts
from ..shared import projectbadge as shared_projectbadge
from ..shared import projectbuildbatchconfig as shared_projectbuildbatchconfig
from ..shared import projectcache as shared_projectcache
from ..shared import projectenvironment as shared_projectenvironment
from ..shared import projectfilesystemlocation as shared_projectfilesystemlocation
from ..shared import logsconfig as shared_logsconfig
from ..shared import projectvisibilitytype_enum as shared_projectvisibilitytype_enum
from ..shared import projectsourceversion as shared_projectsourceversion
from ..shared import projectsource as shared_projectsource
from ..shared import tag as shared_tag
from ..shared import vpcconfig as shared_vpcconfig
from ..shared import webhook as shared_webhook


@dataclass_json
@dataclasses.dataclass
class Project:
    r"""Project
    Information about a build project.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    artifacts: Optional[shared_projectartifacts.ProjectArtifacts] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts') }})
    badge: Optional[shared_projectbadge.ProjectBadge] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badge') }})
    build_batch_config: Optional[shared_projectbuildbatchconfig.ProjectBuildBatchConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatchConfig') }})
    cache: Optional[shared_projectcache.ProjectCache] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache') }})
    concurrent_build_limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrentBuildLimit') }})
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encryption_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    environment: Optional[shared_projectenvironment.ProjectEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    file_system_locations: Optional[list[shared_projectfilesystemlocation.ProjectFileSystemLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSystemLocations') }})
    last_modified: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logs_config: Optional[shared_logsconfig.LogsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsConfig') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project_visibility: Optional[shared_projectvisibilitytype_enum.ProjectVisibilityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectVisibility') }})
    public_project_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicProjectAlias') }})
    queued_timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedTimeoutInMinutes') }})
    resource_access_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceAccessRole') }})
    secondary_artifacts: Optional[list[shared_projectartifacts.ProjectArtifacts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryArtifacts') }})
    secondary_source_versions: Optional[list[shared_projectsourceversion.ProjectSourceVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySourceVersions') }})
    secondary_sources: Optional[list[shared_projectsource.ProjectSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySources') }})
    service_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRole') }})
    source: Optional[shared_projectsource.ProjectSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInMinutes') }})
    vpc_config: Optional[shared_vpcconfig.VpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    webhook: Optional[shared_webhook.Webhook] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
