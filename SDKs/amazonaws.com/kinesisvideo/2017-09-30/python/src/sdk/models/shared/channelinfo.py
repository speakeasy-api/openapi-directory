import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status_enum as shared_status_enum
from ..shared import channeltype_enum as shared_channeltype_enum
from ..shared import singlemasterconfiguration as shared_singlemasterconfiguration


@dataclass_json
@dataclasses.dataclass
class ChannelInfo:
    r"""ChannelInfo
    A structure that encapsulates a signaling channel's metadata and properties.
    """
    
    channel_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelARN') }})
    channel_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelName') }})
    channel_status: Optional[shared_status_enum.StatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelStatus') }})
    channel_type: Optional[shared_channeltype_enum.ChannelTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelType') }})
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    single_master_configuration: Optional[shared_singlemasterconfiguration.SingleMasterConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SingleMasterConfiguration') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
