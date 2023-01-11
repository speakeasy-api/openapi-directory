import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucketowneraccess_enum as shared_bucketowneraccess_enum


@dataclass_json
@dataclasses.dataclass
class BuildArtifacts:
    r"""BuildArtifacts
    Information about build output artifacts.
    """
    
    artifact_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactIdentifier') }})
    bucket_owner_access: Optional[shared_bucketowneraccess_enum.BucketOwnerAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketOwnerAccess') }})
    encryption_disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionDisabled') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    md5sum: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5sum') }})
    override_artifact_name: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideArtifactName') }})
    sha256sum: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256sum') }})
    
