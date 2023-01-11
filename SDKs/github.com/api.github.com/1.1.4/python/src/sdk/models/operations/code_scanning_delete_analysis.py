import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import code_scanning_analysis_deletion as shared_code_scanning_analysis_deletion
from ..shared import scim_error as shared_scim_error


@dataclasses.dataclass
class CodeScanningDeleteAnalysisPathParams:
    analysis_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CodeScanningDeleteAnalysisQueryParams:
    confirm_delete: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'confirm_delete', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CodeScanningDeleteAnalysis503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CodeScanningDeleteAnalysisRequest:
    path_params: CodeScanningDeleteAnalysisPathParams = dataclasses.field()
    query_params: CodeScanningDeleteAnalysisQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CodeScanningDeleteAnalysisResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    code_scanning_analysis_deletion: Optional[shared_code_scanning_analysis_deletion.CodeScanningAnalysisDeletion] = dataclasses.field(default=None)
    code_scanning_delete_analysis_503_application_json_object: Optional[CodeScanningDeleteAnalysis503ApplicationJSON] = dataclasses.field(default=None)
    scim_error: Optional[shared_scim_error.ScimError] = dataclasses.field(default=None)
    
