import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IotSiteWiseAssetModelPropertyIdentifier:
    r"""IotSiteWiseAssetModelPropertyIdentifier
     The asset model property identifer of the input routed from AWS IoT SiteWise. 
    """
    
    asset_model_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelId') }})
    property_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyId') }})
    
