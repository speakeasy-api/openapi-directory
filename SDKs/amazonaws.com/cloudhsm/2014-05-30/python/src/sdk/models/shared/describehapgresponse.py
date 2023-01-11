import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudhsmobjectstate_enum as shared_cloudhsmobjectstate_enum


@dataclass_json
@dataclasses.dataclass
class DescribeHapgResponse:
    r"""DescribeHapgResponse
    Contains the output of the <a>DescribeHapg</a> action.
    """
    
    hapg_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HapgArn') }})
    hapg_serial: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HapgSerial') }})
    hsms_last_action_failed: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmsLastActionFailed') }})
    hsms_pending_deletion: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmsPendingDeletion') }})
    hsms_pending_registration: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmsPendingRegistration') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Label') }})
    last_modified_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTimestamp') }})
    partition_serial_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionSerialList') }})
    state: Optional[shared_cloudhsmobjectstate_enum.CloudHsmObjectStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
