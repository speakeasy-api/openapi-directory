import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getevidencefolderresponse as shared_getevidencefolderresponse


@dataclasses.dataclass
class GetEvidenceFolderPathParams:
    assessment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    control_set_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'controlSetId', 'style': 'simple', 'explode': False }})
    evidence_folder_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'evidenceFolderId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEvidenceFolderHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEvidenceFolderRequest:
    headers: GetEvidenceFolderHeaders = dataclasses.field()
    path_params: GetEvidenceFolderPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEvidenceFolderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_evidence_folder_response: Optional[shared_getevidencefolderresponse.GetEvidenceFolderResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
