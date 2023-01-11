import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import annotationvalue as shared_annotationvalue
from ..shared import serviceid as shared_serviceid


@dataclass_json
@dataclasses.dataclass
class ValueWithServiceIds:
    r"""ValueWithServiceIds
    Information about a segment annotation.
    """
    
    annotation_value: Optional[shared_annotationvalue.AnnotationValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnnotationValue') }})
    service_ids: Optional[list[shared_serviceid.ServiceID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceIds') }})
    
