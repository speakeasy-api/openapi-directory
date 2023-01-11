import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetcompositemodel as shared_assetcompositemodel
from ..shared import assethierarchy as shared_assethierarchy
from ..shared import assetproperty as shared_assetproperty
from ..shared import assetstatus as shared_assetstatus


@dataclass_json
@dataclasses.dataclass
class DescribeAssetResponse:
    asset_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetArn') }})
    asset_creation_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetCreationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    asset_hierarchies: list[shared_assethierarchy.AssetHierarchy] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetHierarchies') }})
    asset_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetId') }})
    asset_last_update_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetLastUpdateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    asset_model_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelId') }})
    asset_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetName') }})
    asset_properties: list[shared_assetproperty.AssetProperty] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetProperties') }})
    asset_status: shared_assetstatus.AssetStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetStatus') }})
    asset_composite_models: Optional[list[shared_assetcompositemodel.AssetCompositeModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetCompositeModels') }})
    
