import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportableinstancefield_enum as shared_exportableinstancefield_enum
from ..shared import fileformat_enum as shared_fileformat_enum
from ..shared import filter as shared_filter
from ..shared import recommendationpreferences as shared_recommendationpreferences
from ..shared import s3destinationconfig as shared_s3destinationconfig


@dataclass_json
@dataclasses.dataclass
class ExportEc2InstanceRecommendationsRequest:
    s3_destination_config: shared_s3destinationconfig.S3DestinationConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3DestinationConfig') }})
    account_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountIds') }})
    fields_to_export: Optional[list[shared_exportableinstancefield_enum.ExportableInstanceFieldEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldsToExport') }})
    file_format: Optional[shared_fileformat_enum.FileFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileFormat') }})
    filters: Optional[list[shared_filter.Filter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    include_member_accounts: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeMemberAccounts') }})
    recommendation_preferences: Optional[shared_recommendationpreferences.RecommendationPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationPreferences') }})
    
