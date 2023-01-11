import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iotsitewiseassetmodelpropertyidentifier as shared_iotsitewiseassetmodelpropertyidentifier


@dataclass_json
@dataclasses.dataclass
class IotSiteWiseInputIdentifier:
    r"""IotSiteWiseInputIdentifier
     The identifer of the input routed from AWS IoT SiteWise. 
    """
    
    iot_site_wise_asset_model_property_identifier: Optional[shared_iotsitewiseassetmodelpropertyidentifier.IotSiteWiseAssetModelPropertyIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotSiteWiseAssetModelPropertyIdentifier') }})
    
