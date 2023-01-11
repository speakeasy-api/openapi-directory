import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcebucketaccess_enum as shared_resourcebucketaccess_enum


@dataclass_json
@dataclasses.dataclass
class SetResourceAccessForBucketRequest:
    access: shared_resourcebucketaccess_enum.ResourceBucketAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    resource_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    
