import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorhandlingconfig as shared_errorhandlingconfig
from ..shared import writeoperationtype_enum as shared_writeoperationtype_enum


@dataclass_json
@dataclasses.dataclass
class SalesforceDestinationProperties:
    r"""SalesforceDestinationProperties
     The properties that are applied when Salesforce is being used as a destination. 
    """
    
    object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    error_handling_config: Optional[shared_errorhandlingconfig.ErrorHandlingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorHandlingConfig') }})
    id_field_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idFieldNames') }})
    write_operation_type: Optional[shared_writeoperationtype_enum.WriteOperationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeOperationType') }})
    
