import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcolumnconfiguration as shared_channelcolumnconfiguration


@dataclass_json
@dataclasses.dataclass
class ChannelColumn:
    r"""ChannelColumn
    The channel column
    """
    
    channel_column_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelColumnId') }})
    channel_column_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelColumnName') }})
    configuration: shared_channelcolumnconfiguration.ChannelColumnConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    position: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    show_in_mapping: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showInMapping') }})
    channel_column_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelColumnDescription') }})
    restricted_values: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedValues') }})
    
