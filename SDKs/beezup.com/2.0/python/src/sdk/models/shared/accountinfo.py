import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import companyinfo as shared_companyinfo
from ..shared import beezup_common_infosummaries as shared_beezup_common_infosummaries
from ..shared import accountinfolinks as shared_accountinfolinks
from ..shared import personalinfo as shared_personalinfo
from ..shared import accountstatus_enum as shared_accountstatus_enum


@dataclass_json
@dataclasses.dataclass
class AccountInfo:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    links: shared_accountinfolinks.AccountInfoLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    status: shared_accountstatus_enum.AccountStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    company_info: Optional[shared_companyinfo.CompanyInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyInfo') }})
    info: Optional[shared_beezup_common_infosummaries.BeezUpCommonInfoSummaries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    personal_info: Optional[shared_personalinfo.PersonalInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalInfo') }})
    profile_picture_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilePictureUrl') }})
    
