import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetmodelcompositemodel as shared_assetmodelcompositemodel
from ..shared import assetmodelhierarchy as shared_assetmodelhierarchy
from ..shared import assetmodelproperty as shared_assetmodelproperty
from ..shared import assetmodelstatus as shared_assetmodelstatus


@dataclass_json
@dataclasses.dataclass
class DescribeAssetModelResponse:
    asset_model_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelArn') }})
    asset_model_creation_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelCreationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    asset_model_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelDescription') }})
    asset_model_hierarchies: list[shared_assetmodelhierarchy.AssetModelHierarchy] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelHierarchies') }})
    asset_model_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelId') }})
    asset_model_last_update_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelLastUpdateDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    asset_model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelName') }})
    asset_model_properties: list[shared_assetmodelproperty.AssetModelProperty] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelProperties') }})
    asset_model_status: shared_assetmodelstatus.AssetModelStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelStatus') }})
    asset_model_composite_models: Optional[list[shared_assetmodelcompositemodel.AssetModelCompositeModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelCompositeModels') }})
    
