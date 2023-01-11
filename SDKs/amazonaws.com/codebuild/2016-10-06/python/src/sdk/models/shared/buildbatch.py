import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buildartifacts as shared_buildartifacts
from ..shared import projectbuildbatchconfig as shared_projectbuildbatchconfig
from ..shared import statustype_enum as shared_statustype_enum
from ..shared import buildgroup as shared_buildgroup
from ..shared import projectcache as shared_projectcache
from ..shared import projectenvironment as shared_projectenvironment
from ..shared import projectfilesystemlocation as shared_projectfilesystemlocation
from ..shared import logsconfig as shared_logsconfig
from ..shared import buildbatchphase as shared_buildbatchphase
from ..shared import projectsourceversion as shared_projectsourceversion
from ..shared import projectsource as shared_projectsource
from ..shared import vpcconfig as shared_vpcconfig


@dataclass_json
@dataclasses.dataclass
class BuildBatch:
    r"""BuildBatch
    Contains information about a batch build.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    artifacts: Optional[shared_buildartifacts.BuildArtifacts] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts') }})
    build_batch_config: Optional[shared_projectbuildbatchconfig.ProjectBuildBatchConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatchConfig') }})
    build_batch_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatchNumber') }})
    build_batch_status: Optional[shared_statustype_enum.StatusTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatchStatus') }})
    build_groups: Optional[list[shared_buildgroup.BuildGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildGroups') }})
    build_timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildTimeoutInMinutes') }})
    cache: Optional[shared_projectcache.ProjectCache] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache') }})
    complete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complete') }})
    current_phase: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPhase') }})
    debug_session_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugSessionEnabled') }})
    encryption_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    environment: Optional[shared_projectenvironment.ProjectEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    file_system_locations: Optional[list[shared_projectfilesystemlocation.ProjectFileSystemLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSystemLocations') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initiator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiator') }})
    log_config: Optional[shared_logsconfig.LogsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfig') }})
    phases: Optional[list[shared_buildbatchphase.BuildBatchPhase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phases') }})
    project_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    queued_timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedTimeoutInMinutes') }})
    resolved_source_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedSourceVersion') }})
    secondary_artifacts: Optional[list[shared_buildartifacts.BuildArtifacts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryArtifacts') }})
    secondary_source_versions: Optional[list[shared_projectsourceversion.ProjectSourceVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySourceVersions') }})
    secondary_sources: Optional[list[shared_projectsource.ProjectSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySources') }})
    service_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRole') }})
    source: Optional[shared_projectsource.ProjectSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    vpc_config: Optional[shared_vpcconfig.VpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    
