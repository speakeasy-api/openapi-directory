import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import slotvalueregexfilter as shared_slotvalueregexfilter
from ..shared import slotvalueresolutionstrategy_enum as shared_slotvalueresolutionstrategy_enum
from ..shared import slottypevalue as shared_slottypevalue
from ..shared import updateslottyperesponse as shared_updateslottyperesponse


@dataclasses.dataclass
class UpdateSlotTypePathParams:
    bot_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    locale_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    slot_type_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slotTypeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSlotTypeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSlotTypeRequestBodyValueSelectionSetting:
    r"""UpdateSlotTypeRequestBodyValueSelectionSetting
    Contains settings used by Amazon Lex to select a slot value.
    """
    
    regex_filter: Optional[shared_slotvalueregexfilter.SlotValueRegexFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regexFilter') }})
    resolution_strategy: Optional[shared_slotvalueresolutionstrategy_enum.SlotValueResolutionStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolutionStrategy') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSlotTypeRequestBody:
    slot_type_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotTypeName') }})
    value_selection_setting: UpdateSlotTypeRequestBodyValueSelectionSetting = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueSelectionSetting') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    parent_slot_type_signature: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentSlotTypeSignature') }})
    slot_type_values: Optional[list[shared_slottypevalue.SlotTypeValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotTypeValues') }})
    

@dataclasses.dataclass
class UpdateSlotTypeRequest:
    headers: UpdateSlotTypeHeaders = dataclasses.field()
    path_params: UpdateSlotTypePathParams = dataclasses.field()
    request: UpdateSlotTypeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateSlotTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    precondition_failed_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_slot_type_response: Optional[shared_updateslottyperesponse.UpdateSlotTypeResponse] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
