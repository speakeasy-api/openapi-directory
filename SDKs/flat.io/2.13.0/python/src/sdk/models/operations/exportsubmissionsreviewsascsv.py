import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ExportSubmissionsReviewsAsCsvPathParams:
    assignment: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assignment', 'style': 'simple', 'explode': False }})
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportSubmissionsReviewsAsCsvSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ExportSubmissionsReviewsAsCsvRequest:
    path_params: ExportSubmissionsReviewsAsCsvPathParams = dataclasses.field()
    security: ExportSubmissionsReviewsAsCsvSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportSubmissionsReviewsAsCsvResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    export_submissions_reviews_as_csv_200_text_csv_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
