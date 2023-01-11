import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsRedshiftClusterResizeInfo:
    r"""AwsRedshiftClusterResizeInfo
    Information about the resize operation for the cluster.
    """
    
    allow_cancel_resize: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowCancelResize') }})
    resize_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResizeType') }})
    
