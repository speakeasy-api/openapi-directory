import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scim_enterprise_group as shared_scim_enterprise_group


@dataclasses.dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scim_group_id', 'style': 'simple', 'explode': False }})
    
class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum(str, Enum):
    ADD_LOWER = "add"
    ADD_MIXED = "Add"
    REMOVE_LOWER = "remove"
    REMOVE_MIXED = "Remove"
    REPLACE_LOWER = "replace"
    REPLACE_MIXED = "Replace"


@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations:
    op: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    value: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody:
    operations: list[EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operations') }})
    schemas: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest:
    path_params: EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scim_enterprise_group: Optional[shared_scim_enterprise_group.ScimEnterpriseGroup] = dataclasses.field(default=None)
    
