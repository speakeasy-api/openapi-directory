import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import multiregionkeytype_enum as shared_multiregionkeytype_enum
from ..shared import multiregionkey as shared_multiregionkey


@dataclass_json
@dataclasses.dataclass
class MultiRegionConfiguration:
    r"""MultiRegionConfiguration
    <p>Describes the configuration of this multi-Region key. This field appears only when the KMS key is a primary or replica of a multi-Region key.</p> <p>For more information about any listed KMS key, use the <a>DescribeKey</a> operation.</p>
    """
    
    multi_region_key_type: Optional[shared_multiregionkeytype_enum.MultiRegionKeyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiRegionKeyType') }})
    primary_key: Optional[shared_multiregionkey.MultiRegionKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryKey') }})
    replica_keys: Optional[list[shared_multiregionkey.MultiRegionKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaKeys') }})
    
