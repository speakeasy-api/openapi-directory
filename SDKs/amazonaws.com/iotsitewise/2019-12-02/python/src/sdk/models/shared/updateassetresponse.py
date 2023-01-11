import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetstatus as shared_assetstatus


@dataclass_json
@dataclasses.dataclass
class UpdateAssetResponse:
    asset_status: shared_assetstatus.AssetStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetStatus') }})
    
