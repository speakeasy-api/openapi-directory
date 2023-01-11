import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucketowneraccess_enum as shared_bucketowneraccess_enum
from ..shared import artifactnamespace_enum as shared_artifactnamespace_enum
from ..shared import artifactpackaging_enum as shared_artifactpackaging_enum
from ..shared import artifactstype_enum as shared_artifactstype_enum


@dataclass_json
@dataclasses.dataclass
class ProjectArtifacts:
    r"""ProjectArtifacts
    Information about the build output artifacts for the build project.
    """
    
    type: shared_artifactstype_enum.ArtifactsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    artifact_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactIdentifier') }})
    bucket_owner_access: Optional[shared_bucketowneraccess_enum.BucketOwnerAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketOwnerAccess') }})
    encryption_disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionDisabled') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    namespace_type: Optional[shared_artifactnamespace_enum.ArtifactNamespaceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceType') }})
    override_artifact_name: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideArtifactName') }})
    packaging: Optional[shared_artifactpackaging_enum.ArtifactPackagingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packaging') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    
