import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import code_scanning_analysis as shared_code_scanning_analysis


@dataclasses.dataclass
class CodeScanningGetAnalysisPathParams:
    analysis_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'analysis_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CodeScanningGetAnalysis503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CodeScanningGetAnalysisRequest:
    path_params: CodeScanningGetAnalysisPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CodeScanningGetAnalysisResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    code_scanning_analysis: Optional[shared_code_scanning_analysis.CodeScanningAnalysis] = dataclasses.field(default=None)
    code_scanning_get_analysis_503_application_json_object: Optional[CodeScanningGetAnalysis503ApplicationJSON] = dataclasses.field(default=None)
    
