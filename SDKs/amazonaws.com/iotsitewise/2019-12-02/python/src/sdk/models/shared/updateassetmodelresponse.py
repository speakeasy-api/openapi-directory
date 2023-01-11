import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetmodelstatus as shared_assetmodelstatus


@dataclass_json
@dataclasses.dataclass
class UpdateAssetModelResponse:
    asset_model_status: shared_assetmodelstatus.AssetModelStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelStatus') }})
    
