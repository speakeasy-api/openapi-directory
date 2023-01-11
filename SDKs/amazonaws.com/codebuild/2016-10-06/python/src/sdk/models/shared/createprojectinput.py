import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectartifacts as shared_projectartifacts
from ..shared import projectbuildbatchconfig as shared_projectbuildbatchconfig
from ..shared import projectcache as shared_projectcache
from ..shared import projectenvironment as shared_projectenvironment
from ..shared import projectfilesystemlocation as shared_projectfilesystemlocation
from ..shared import logsconfig as shared_logsconfig
from ..shared import projectsourceversion as shared_projectsourceversion
from ..shared import projectsource as shared_projectsource
from ..shared import tag as shared_tag
from ..shared import vpcconfig as shared_vpcconfig


@dataclass_json
@dataclasses.dataclass
class CreateProjectInput:
    artifacts: shared_projectartifacts.ProjectArtifacts = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts') }})
    environment: shared_projectenvironment.ProjectEnvironment = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRole') }})
    source: shared_projectsource.ProjectSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    badge_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgeEnabled') }})
    build_batch_config: Optional[shared_projectbuildbatchconfig.ProjectBuildBatchConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatchConfig') }})
    cache: Optional[shared_projectcache.ProjectCache] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache') }})
    concurrent_build_limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrentBuildLimit') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encryption_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKey') }})
    file_system_locations: Optional[list[shared_projectfilesystemlocation.ProjectFileSystemLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSystemLocations') }})
    logs_config: Optional[shared_logsconfig.LogsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsConfig') }})
    queued_timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedTimeoutInMinutes') }})
    secondary_artifacts: Optional[list[shared_projectartifacts.ProjectArtifacts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryArtifacts') }})
    secondary_source_versions: Optional[list[shared_projectsourceversion.ProjectSourceVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySourceVersions') }})
    secondary_sources: Optional[list[shared_projectsource.ProjectSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySources') }})
    source_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    timeout_in_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInMinutes') }})
    vpc_config: Optional[shared_vpcconfig.VpcConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    
