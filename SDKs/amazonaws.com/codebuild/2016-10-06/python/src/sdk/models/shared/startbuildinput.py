import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectartifacts as shared_projectartifacts
from ..shared import buildstatusconfig as shared_buildstatusconfig
from ..shared import projectcache as shared_projectcache
from ..shared import computetype_enum as shared_computetype_enum
from ..shared import environmenttype_enum as shared_environmenttype_enum
from ..shared import environmentvariable as shared_environmentvariable
from ..shared import gitsubmodulesconfig as shared_gitsubmodulesconfig
from ..shared import imagepullcredentialstype_enum as shared_imagepullcredentialstype_enum
from ..shared import logsconfig as shared_logsconfig
from ..shared import registrycredential as shared_registrycredential
from ..shared import projectsource as shared_projectsource
from ..shared import projectsourceversion as shared_projectsourceversion
from ..shared import sourceauth as shared_sourceauth
from ..shared import sourcetype_enum as shared_sourcetype_enum


@dataclass_json
@dataclasses.dataclass
class StartBuildInput:
    project_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    artifacts_override: Optional[shared_projectartifacts.ProjectArtifacts] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactsOverride') }})
    build_status_config_override: Optional[shared_buildstatusconfig.BuildStatusConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildStatusConfigOverride') }})
    buildspec_override: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildspecOverride') }})
    cache_override: Optional[shared_projectcache.ProjectCache] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheOverride') }})
    certificate_override: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateOverride') }})
    compute_type_override: Optional[shared_computetype_enum.ComputeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeTypeOverride') }})
    debug_session_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugSessionEnabled') }})
    encryption_key_override: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionKeyOverride') }})
    environment_type_override: Optional[shared_environmenttype_enum.EnvironmentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentTypeOverride') }})
    environment_variables_override: Optional[list[shared_environmentvariable.EnvironmentVariable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariablesOverride') }})
    git_clone_depth_override: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitCloneDepthOverride') }})
    git_submodules_config_override: Optional[shared_gitsubmodulesconfig.GitSubmodulesConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitSubmodulesConfigOverride') }})
    image_override: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageOverride') }})
    image_pull_credentials_type_override: Optional[shared_imagepullcredentialstype_enum.ImagePullCredentialsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePullCredentialsTypeOverride') }})
    insecure_ssl_override: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecureSslOverride') }})
    logs_config_override: Optional[shared_logsconfig.LogsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsConfigOverride') }})
    privileged_mode_override: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privilegedModeOverride') }})
    queued_timeout_in_minutes_override: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedTimeoutInMinutesOverride') }})
    registry_credential_override: Optional[shared_registrycredential.RegistryCredential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryCredentialOverride') }})
    report_build_status_override: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportBuildStatusOverride') }})
    secondary_artifacts_override: Optional[list[shared_projectartifacts.ProjectArtifacts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryArtifactsOverride') }})
    secondary_sources_override: Optional[list[shared_projectsource.ProjectSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySourcesOverride') }})
    secondary_sources_version_override: Optional[list[shared_projectsourceversion.ProjectSourceVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondarySourcesVersionOverride') }})
    service_role_override: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRoleOverride') }})
    source_auth_override: Optional[shared_sourceauth.SourceAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAuthOverride') }})
    source_location_override: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceLocationOverride') }})
    source_type_override: Optional[shared_sourcetype_enum.SourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceTypeOverride') }})
    source_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    timeout_in_minutes_override: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInMinutesOverride') }})
    
