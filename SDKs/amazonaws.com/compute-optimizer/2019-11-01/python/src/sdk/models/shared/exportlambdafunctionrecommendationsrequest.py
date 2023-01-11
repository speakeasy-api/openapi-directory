import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportablelambdafunctionfield_enum as shared_exportablelambdafunctionfield_enum
from ..shared import fileformat_enum as shared_fileformat_enum
from ..shared import lambdafunctionrecommendationfilter as shared_lambdafunctionrecommendationfilter
from ..shared import s3destinationconfig as shared_s3destinationconfig


@dataclass_json
@dataclasses.dataclass
class ExportLambdaFunctionRecommendationsRequest:
    s3_destination_config: shared_s3destinationconfig.S3DestinationConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3DestinationConfig') }})
    account_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountIds') }})
    fields_to_export: Optional[list[shared_exportablelambdafunctionfield_enum.ExportableLambdaFunctionFieldEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldsToExport') }})
    file_format: Optional[shared_fileformat_enum.FileFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileFormat') }})
    filters: Optional[list[shared_lambdafunctionrecommendationfilter.LambdaFunctionRecommendationFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    include_member_accounts: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeMemberAccounts') }})
    
