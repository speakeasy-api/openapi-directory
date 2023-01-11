import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionkeyannotation as shared_dimensionkeyannotation


@dataclass_json
@dataclasses.dataclass
class DimensionMetadata:
    r"""DimensionMetadata
    This type defines the dimension used to create the report and the annotation keys associated with that dimension.
    """
    
    data_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    dimension_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionKey') }})
    dimension_key_annotations: Optional[list[shared_dimensionkeyannotation.DimensionKeyAnnotation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionKeyAnnotations') }})
    
