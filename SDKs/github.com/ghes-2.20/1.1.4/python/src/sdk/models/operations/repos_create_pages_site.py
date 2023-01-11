import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import page as shared_page
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposCreatePagesSitePathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposCreatePagesSiteRequestBodySourceBranchEnum(str, Enum):
    MASTER = "master"
    GH_PAGES = "gh-pages"

class ReposCreatePagesSiteRequestBodySourcePathEnum(str, Enum):
    ROOT_ = "/"
    ROOT_DOCS = "/docs"


@dataclass_json
@dataclasses.dataclass
class ReposCreatePagesSiteRequestBodySource:
    r"""ReposCreatePagesSiteRequestBodySource
    The source branch and directory used to publish your Pages site.
    """
    
    branch: ReposCreatePagesSiteRequestBodySourceBranchEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    path: Optional[ReposCreatePagesSiteRequestBodySourcePathEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreatePagesSiteRequestBody:
    r"""ReposCreatePagesSiteRequestBody
    The source branch and directory used to publish your Pages site.
    """
    
    source: ReposCreatePagesSiteRequestBodySource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclass_json
@dataclasses.dataclass
class ReposCreatePagesSite415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReposCreatePagesSiteRequest:
    path_params: ReposCreatePagesSitePathParams = dataclasses.field()
    request: Optional[ReposCreatePagesSiteRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposCreatePagesSiteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    page: Optional[shared_page.Page] = dataclasses.field(default=None)
    repos_create_pages_site_415_application_json_object: Optional[ReposCreatePagesSite415ApplicationJSON] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
