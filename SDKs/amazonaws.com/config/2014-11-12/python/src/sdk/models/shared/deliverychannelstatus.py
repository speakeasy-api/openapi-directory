import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configexportdeliveryinfo as shared_configexportdeliveryinfo
from ..shared import configstreamdeliveryinfo as shared_configstreamdeliveryinfo


@dataclass_json
@dataclasses.dataclass
class DeliveryChannelStatus:
    r"""DeliveryChannelStatus
    <p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p>
    """
    
    config_history_delivery_info: Optional[shared_configexportdeliveryinfo.ConfigExportDeliveryInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configHistoryDeliveryInfo') }})
    config_snapshot_delivery_info: Optional[shared_configexportdeliveryinfo.ConfigExportDeliveryInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSnapshotDeliveryInfo') }})
    config_stream_delivery_info: Optional[shared_configstreamdeliveryinfo.ConfigStreamDeliveryInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configStreamDeliveryInfo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
