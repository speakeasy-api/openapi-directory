import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obfuscationsettingtype_enum as shared_obfuscationsettingtype_enum
from ..shared import slotdefaultvaluespecification as shared_slotdefaultvaluespecification
from ..shared import promptspecification as shared_promptspecification
from ..shared import sampleutterance as shared_sampleutterance
from ..shared import slotconstraint_enum as shared_slotconstraint_enum
from ..shared import waitandcontinuespecification as shared_waitandcontinuespecification
from ..shared import updateslotresponse as shared_updateslotresponse


@dataclasses.dataclass
class UpdateSlotPathParams:
    bot_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    intent_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'intentId', 'style': 'simple', 'explode': False }})
    locale_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'localeId', 'style': 'simple', 'explode': False }})
    slot_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slotId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSlotHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSlotRequestBodyMultipleValuesSetting:
    r"""UpdateSlotRequestBodyMultipleValuesSetting
    Indicates whether a slot can return multiple values.
    """
    
    allow_multiple_values: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMultipleValues') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSlotRequestBodyObfuscationSetting:
    r"""UpdateSlotRequestBodyObfuscationSetting
    Determines whether Amazon Lex obscures slot values in conversation logs. 
    """
    
    obfuscation_setting_type: Optional[shared_obfuscationsettingtype_enum.ObfuscationSettingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscationSettingType') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSlotRequestBodyValueElicitationSetting:
    r"""UpdateSlotRequestBodyValueElicitationSetting
    Settings that you can use for eliciting a slot value.
    """
    
    default_value_specification: Optional[shared_slotdefaultvaluespecification.SlotDefaultValueSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValueSpecification') }})
    prompt_specification: Optional[shared_promptspecification.PromptSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promptSpecification') }})
    sample_utterances: Optional[list[shared_sampleutterance.SampleUtterance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleUtterances') }})
    slot_constraint: Optional[shared_slotconstraint_enum.SlotConstraintEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotConstraint') }})
    wait_and_continue_specification: Optional[shared_waitandcontinuespecification.WaitAndContinueSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitAndContinueSpecification') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSlotRequestBody:
    slot_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotName') }})
    slot_type_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotTypeId') }})
    value_elicitation_setting: UpdateSlotRequestBodyValueElicitationSetting = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueElicitationSetting') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    multiple_values_setting: Optional[UpdateSlotRequestBodyMultipleValuesSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multipleValuesSetting') }})
    obfuscation_setting: Optional[UpdateSlotRequestBodyObfuscationSetting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscationSetting') }})
    

@dataclasses.dataclass
class UpdateSlotRequest:
    headers: UpdateSlotHeaders = dataclasses.field()
    path_params: UpdateSlotPathParams = dataclasses.field()
    request: UpdateSlotRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateSlotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    precondition_failed_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_slot_response: Optional[shared_updateslotresponse.UpdateSlotResponse] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
