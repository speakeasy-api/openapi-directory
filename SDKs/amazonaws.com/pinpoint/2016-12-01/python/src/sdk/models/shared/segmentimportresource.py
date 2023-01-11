import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import format_enum as shared_format_enum


@dataclass_json
@dataclasses.dataclass
class SegmentImportResource:
    r"""SegmentImportResource
    Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions.
    """
    
    external_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalId') }})
    format: shared_format_enum.FormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    s3_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Url') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    channel_counts: Optional[dict[str, int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelCounts') }})
    
