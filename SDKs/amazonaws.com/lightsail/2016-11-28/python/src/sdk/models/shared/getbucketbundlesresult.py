import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucketbundle as shared_bucketbundle


@dataclass_json
@dataclasses.dataclass
class GetBucketBundlesResult:
    bundles: Optional[list[shared_bucketbundle.BucketBundle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundles') }})
    
