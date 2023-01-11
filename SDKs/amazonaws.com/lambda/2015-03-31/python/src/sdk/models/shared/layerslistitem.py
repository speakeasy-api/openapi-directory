import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import layerversionslistitem as shared_layerversionslistitem


@dataclass_json
@dataclasses.dataclass
class LayersListItem:
    r"""LayersListItem
    Details about an <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html\">Lambda layer</a>.
    """
    
    latest_matching_version: Optional[shared_layerversionslistitem.LayerVersionsListItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestMatchingVersion') }})
    layer_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerArn') }})
    layer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerName') }})
    
