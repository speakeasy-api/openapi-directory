import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import scim_error as shared_scim_error
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposUpdateInformationAboutPagesSitePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum(str, Enum):
    GH_PAGES = "gh-pages"
    MASTER = "master"
    MASTER_DOCS = "master /docs"


@dataclass_json
@dataclasses.dataclass
class ReposUpdateInformationAboutPagesSiteRequestBody:
    https_enforced: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('https_enforced') }})
    public: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    source: Optional[ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclasses.dataclass
class ReposUpdateInformationAboutPagesSiteRequest:
    path_params: ReposUpdateInformationAboutPagesSitePathParams = dataclasses.field()
    request: Optional[ReposUpdateInformationAboutPagesSiteRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposUpdateInformationAboutPagesSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    scim_error: Optional[shared_scim_error.ScimError] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
