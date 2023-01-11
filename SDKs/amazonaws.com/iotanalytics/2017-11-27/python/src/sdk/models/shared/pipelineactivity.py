import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addattributesactivity as shared_addattributesactivity
from ..shared import channelactivity as shared_channelactivity
from ..shared import datastoreactivity as shared_datastoreactivity
from ..shared import deviceregistryenrichactivity as shared_deviceregistryenrichactivity
from ..shared import deviceshadowenrichactivity as shared_deviceshadowenrichactivity
from ..shared import filteractivity as shared_filteractivity
from ..shared import lambdaactivity as shared_lambdaactivity
from ..shared import mathactivity as shared_mathactivity
from ..shared import removeattributesactivity as shared_removeattributesactivity
from ..shared import selectattributesactivity as shared_selectattributesactivity


@dataclass_json
@dataclasses.dataclass
class PipelineActivity:
    r"""PipelineActivity
    An activity that performs a transformation on a message.
    """
    
    add_attributes: Optional[shared_addattributesactivity.AddAttributesActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addAttributes') }})
    channel: Optional[shared_channelactivity.ChannelActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    datastore: Optional[shared_datastoreactivity.DatastoreActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastore') }})
    device_registry_enrich: Optional[shared_deviceregistryenrichactivity.DeviceRegistryEnrichActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceRegistryEnrich') }})
    device_shadow_enrich: Optional[shared_deviceshadowenrichactivity.DeviceShadowEnrichActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceShadowEnrich') }})
    filter: Optional[shared_filteractivity.FilterActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    lambda_: Optional[shared_lambdaactivity.LambdaActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambda') }})
    math: Optional[shared_mathactivity.MathActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('math') }})
    remove_attributes: Optional[shared_removeattributesactivity.RemoveAttributesActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeAttributes') }})
    select_attributes: Optional[shared_selectattributesactivity.SelectAttributesActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectAttributes') }})
    
