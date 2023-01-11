import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import check_suite as shared_check_suite


@dataclasses.dataclass
class ChecksListSuitesForRefPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChecksListSuitesForRefQueryParams:
    app_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_id', 'style': 'form', 'explode': True }})
    check_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'check_name', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ChecksListSuitesForRef200ApplicationJSON:
    check_suites: list[shared_check_suite.CheckSuite] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_suites') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class ChecksListSuitesForRefRequest:
    path_params: ChecksListSuitesForRefPathParams = dataclasses.field()
    query_params: ChecksListSuitesForRefQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ChecksListSuitesForRefResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    checks_list_suites_for_ref_200_application_json_object: Optional[ChecksListSuitesForRef200ApplicationJSON] = dataclasses.field(default=None)
    
