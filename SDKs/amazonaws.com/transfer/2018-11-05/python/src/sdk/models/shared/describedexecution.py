import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filelocation as shared_filelocation
from ..shared import loggingconfiguration as shared_loggingconfiguration
from ..shared import posixprofile as shared_posixprofile
from ..shared import executionresults as shared_executionresults
from ..shared import servicemetadata as shared_servicemetadata
from ..shared import executionstatus_enum as shared_executionstatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribedExecution:
    r"""DescribedExecution
    The details for an execution object.
    """
    
    execution_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionId') }})
    execution_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRole') }})
    initial_file_location: Optional[shared_filelocation.FileLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialFileLocation') }})
    logging_configuration: Optional[shared_loggingconfiguration.LoggingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingConfiguration') }})
    posix_profile: Optional[shared_posixprofile.PosixProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PosixProfile') }})
    results: Optional[shared_executionresults.ExecutionResults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    service_metadata: Optional[shared_servicemetadata.ServiceMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceMetadata') }})
    status: Optional[shared_executionstatus_enum.ExecutionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
