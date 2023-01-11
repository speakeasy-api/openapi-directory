import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import code_scanning_analysis as shared_code_scanning_analysis


@dataclasses.dataclass
class CodeScanningListRecentAnalysesPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CodeScanningListRecentAnalysesQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    ref: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ref', 'style': 'form', 'explode': True }})
    sarif_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sarif_id', 'style': 'form', 'explode': True }})
    tool_guid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tool_guid', 'style': 'form', 'explode': True }})
    tool_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tool_name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CodeScanningListRecentAnalyses503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CodeScanningListRecentAnalysesRequest:
    path_params: CodeScanningListRecentAnalysesPathParams = dataclasses.field()
    query_params: CodeScanningListRecentAnalysesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CodeScanningListRecentAnalysesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    code_scanning_analyses: Optional[list[shared_code_scanning_analysis.CodeScanningAnalysis]] = dataclasses.field(default=None)
    code_scanning_list_recent_analyses_503_application_json_object: Optional[CodeScanningListRecentAnalyses503ApplicationJSON] = dataclasses.field(default=None)
    
