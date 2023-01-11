import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SubmissionEntryDeliveryReportsEnum(str, Enum):
    ALL = "ALL"
    ERRORS = "ERRORS"
    NONE = "NONE"

class SubmissionEntryEncodingEnum(str, Enum):
    TEXT = "TEXT"
    UNICODE = "UNICODE"
    BINARY = "BINARY"

class SubmissionEntryFromTypeEnum(str, Enum):
    INTERNATIONAL = "INTERNATIONAL"
    ALPHANUMERIC = "ALPHANUMERIC"
    SHORTCODE = "SHORTCODE"
    REPLIABLE = "REPLIABLE"


@dataclass_json
@dataclasses.dataclass
class SubmissionEntryFrom:
    r"""SubmissionEntryFrom
    Identifies the sender.
    
    Instead of a structured object, you can supply a string value here. 
    If you do this, the `type` of the sender is derived to be either INTERNATIONAL or ALPHANUMERIC.  If the value does not begin with a `+` and it contains at least one character that is not a digit, the type is detected as ALPHANUMERIC. Otherwise, the type is detected as INTERNATIONAL.
    
    """
    
    type: SubmissionEntryFromTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    
class SubmissionEntryMessageClassEnum(str, Enum):
    FLASH_SMS = "FLASH_SMS"
    ME_SPECIFIC = "ME_SPECIFIC"
    SIM_SPECIFIC = "SIM_SPECIFIC"
    TE_SPECIFIC = "TE_SPECIFIC"

class SubmissionEntryProtocolIDEnum(str, Enum):
    IMPLICIT = "IMPLICIT"
    SHORT_MESSAGE_TYPE_0 = "SHORT_MESSAGE_TYPE_0"
    REPLACE_MESSAGE_1 = "REPLACE_MESSAGE_1"
    REPLACE_MESSAGE_2 = "REPLACE_MESSAGE_2"
    REPLACE_MESSAGE_3 = "REPLACE_MESSAGE_3"
    REPLACE_MESSAGE_4 = "REPLACE_MESSAGE_4"
    REPLACE_MESSAGE_5 = "REPLACE_MESSAGE_5"
    REPLACE_MESSAGE_6 = "REPLACE_MESSAGE_6"
    REPLACE_MESSAGE_7 = "REPLACE_MESSAGE_7"
    RETURN_CALL = "RETURN_CALL"
    ME_DOWNLOAD = "ME_DOWNLOAD"
    ME_DEPERSONALIZE = "ME_DEPERSONALIZE"
    SIM_DOWNLOAD = "SIM_DOWNLOAD"

class SubmissionEntryRoutingGroupEnum(str, Enum):
    ECONOMY = "ECONOMY"
    STANDARD = "STANDARD"
    PREMIUM = "PREMIUM"

class SubmissionEntryToTypeEnum(str, Enum):
    INTERNATIONAL = "INTERNATIONAL"
    GROUP = "GROUP"


@dataclass_json
@dataclasses.dataclass
class SubmissionEntryTo:
    address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[SubmissionEntryToTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class SubmissionEntry:
    r"""SubmissionEntry
    An object that you use when posting messages.
    """
    
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    to: list[SubmissionEntryTo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    delivery_reports: Optional[SubmissionEntryDeliveryReportsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryReports') }})
    encoding: Optional[SubmissionEntryEncodingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    from_: Optional[SubmissionEntryFrom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    long_message_max_parts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longMessageMaxParts') }})
    message_class: Optional[SubmissionEntryMessageClassEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageClass') }})
    protocol_id: Optional[SubmissionEntryProtocolIDEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocolId') }})
    routing_group: Optional[SubmissionEntryRoutingGroupEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingGroup') }})
    user_supplied_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSuppliedId') }})
    
