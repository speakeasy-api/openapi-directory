import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import segmentdimensions as shared_segmentdimensions
from ..shared import segmentimportresource as shared_segmentimportresource
from ..shared import segmentgrouplist as shared_segmentgrouplist
from ..shared import segmenttype_enum as shared_segmenttype_enum


@dataclass_json
@dataclasses.dataclass
class SegmentResponse:
    r"""SegmentResponse
    Provides information about the configuration, dimension, and other settings for a segment.
    """
    
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    creation_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    segment_type: shared_segmenttype_enum.SegmentTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentType') }})
    dimensions: Optional[shared_segmentdimensions.SegmentDimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    import_definition: Optional[shared_segmentimportresource.SegmentImportResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportDefinition') }})
    last_modified_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    segment_groups: Optional[shared_segmentgrouplist.SegmentGroupList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentGroups') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
