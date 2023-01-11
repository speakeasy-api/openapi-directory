import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buildartifacts as shared_buildartifacts
from ..shared import statustype_enum as shared_statustype_enum
from ..shared import projectcache as shared_projectcache
from ..shared import debugsession as shared_debugsession
from ..shared import projectenvironment as shared_projectenvironment
from ..shared import exportedenvironmentvariable as shared_exportedenvironmentvariable
from ..shared import projectfilesystemlocation as shared_projectfilesystemlocation
from ..shared import logslocation as shared_logslocation
from ..shared import networkinterface as shared_networkinterface
from ..shared import buildphase as shared_buildphase
from ..shared import projectsourceversion as shared_projectsourceversion
from ..shared import projectsource as shared_projectsource
from ..shared import vpcconfig as shared_vpcconfig


@dataclass_json
@dataclasses.dataclass
class Build:
    r"""Build
    Information about a build.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    artifacts: Optional[shared_buildartifacts.BuildArtifacts] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts') }})
    build_batch_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatchArn') }})
    build_complete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildComplete') }})
    build_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildNumber') }})
    build_status: Optional[shared_statustype_enum.StatusTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildStatus') }})
    cache: Optional[shared_projectcache.ProjectCache] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache') }})
    current_phase: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPhase') }})
    debug_session: Optional[shared_debugsession.DebugSession] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugSession') }})
    encryption_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    environment: Optional[shared_projectenvironment.ProjectEnvironment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    exported_environment_variables: Optional[list[shared_exportedenvironmentvariable.ExportedEnvironmentVariable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportedEnvironmentVariables') }})
    file_system_locations: Optional[list[shared_projectfilesystemlocation.ProjectFileSystemLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSystemLocations') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initiator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiator') }})
    logs: Optional[shared_logslocation.LogsLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logs') }})
    network_interface: Optional[shared_networkinterface.NetworkInterface] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterface') }})
    phases: Optional[list[shared_buildphase.BuildPhase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phases') }})
    project_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    queued_timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedTimeoutInMinutes') }})
    report_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportArns') }})
    resolved_source_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedSourceVersion') }})
    secondary_artifacts: Optional[list[shared_buildartifacts.BuildArtifacts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryArtifacts') }})
    secondary_source_versions: Optional[list[shared_projectsourceversion.ProjectSourceVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySourceVersions') }})
    secondary_sources: Optional[list[shared_projectsource.ProjectSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySources') }})
    service_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRole') }})
    source: Optional[shared_projectsource.ProjectSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInMinutes') }})
    vpc_config: Optional[shared_vpcconfig.VpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    
