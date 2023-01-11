import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationfieldproperties as shared_destinationfieldproperties
from ..shared import sourcefieldproperties as shared_sourcefieldproperties
from ..shared import supportedfieldtypedetails as shared_supportedfieldtypedetails


@dataclass_json
@dataclasses.dataclass
class ConnectorEntityField:
    r"""ConnectorEntityField
     Describes the data model of a connector field. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on. 
    """
    
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_properties: Optional[shared_destinationfieldproperties.DestinationFieldProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationProperties') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    source_properties: Optional[shared_sourcefieldproperties.SourceFieldProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceProperties') }})
    supported_field_type_details: Optional[shared_supportedfieldtypedetails.SupportedFieldTypeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedFieldTypeDetails') }})
    
