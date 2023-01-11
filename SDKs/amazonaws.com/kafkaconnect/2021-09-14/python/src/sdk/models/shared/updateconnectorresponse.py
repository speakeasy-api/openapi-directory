import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectorstate_enum as shared_connectorstate_enum


@dataclass_json
@dataclasses.dataclass
class UpdateConnectorResponse:
    connector_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorArn') }})
    connector_state: Optional[shared_connectorstate_enum.ConnectorStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorState') }})
    
