import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import putassetpropertyvalueentry as shared_putassetpropertyvalueentry


@dataclass_json
@dataclasses.dataclass
class IotSiteWiseAction:
    r"""IotSiteWiseAction
    Describes an action to send data from an MQTT message that triggered the rule to IoT SiteWise asset properties.
    """
    
    put_asset_property_value_entries: list[shared_putassetpropertyvalueentry.PutAssetPropertyValueEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('putAssetPropertyValueEntries') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
