import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesslevelfilter as shared_accesslevelfilter
from ..shared import listrecordhistorysearchfilter as shared_listrecordhistorysearchfilter


@dataclass_json
@dataclasses.dataclass
class ListRecordHistoryInput:
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    access_level_filter: Optional[shared_accesslevelfilter.AccessLevelFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessLevelFilter') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageSize') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageToken') }})
    search_filter: Optional[shared_listrecordhistorysearchfilter.ListRecordHistorySearchFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchFilter') }})
    
