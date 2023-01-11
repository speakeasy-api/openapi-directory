import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontypeexecutor as shared_actiontypeexecutor
from ..shared import actiontypeidentifier as shared_actiontypeidentifier
from ..shared import actiontypeartifactdetails as shared_actiontypeartifactdetails
from ..shared import actiontypepermissions as shared_actiontypepermissions
from ..shared import actiontypeurls as shared_actiontypeurls


@dataclass_json
@dataclasses.dataclass
class ActionTypeDeclaration:
    r"""ActionTypeDeclaration
    The parameters for the action type definition that are provided when the action type is created or updated.
    """
    
    executor: shared_actiontypeexecutor.ActionTypeExecutor = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executor') }})
    id: shared_actiontypeidentifier.ActionTypeIdentifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    input_artifact_details: shared_actiontypeartifactdetails.ActionTypeArtifactDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArtifactDetails') }})
    output_artifact_details: shared_actiontypeartifactdetails.ActionTypeArtifactDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputArtifactDetails') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    permissions: Optional[shared_actiontypepermissions.ActionTypePermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    properties: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    urls: Optional[shared_actiontypeurls.ActionTypeUrls] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    
