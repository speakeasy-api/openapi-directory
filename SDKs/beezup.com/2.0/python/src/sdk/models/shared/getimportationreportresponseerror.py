import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetImportationReportResponseError:
    error_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    product_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCount') }})
    user_colum_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userColumName') }})
    beez_up_column_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPColumnName') }})
    
