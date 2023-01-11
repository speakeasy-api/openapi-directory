import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldtypedetails as shared_fieldtypedetails


@dataclass_json
@dataclasses.dataclass
class SupportedFieldTypeDetails:
    r"""SupportedFieldTypeDetails
     Contains details regarding all the supported <code>FieldTypes</code> and their corresponding <code>filterOperators</code> and <code>supportedValues</code>. 
    """
    
    v1: shared_fieldtypedetails.FieldTypeDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('v1') }})
    
