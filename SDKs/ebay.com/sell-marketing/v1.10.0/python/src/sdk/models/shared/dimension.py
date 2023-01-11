import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Dimension:
    r"""Dimension
    This type defines the annotation and dimension key used by the report. For information on how to set these values, see Reading Promoted Listings reports.
    """
    
    annotation_keys: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationKeys') }})
    dimension_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionKey') }})
    
