import dataclasses
from enum import Enum

class GetContentAspectIDCivixDocumentIDAspectIDEnum(str, Enum):
    COMPLETE = "complete"
    CORPREG = "corpreg"
    BCGAZ1 = "bcgaz1"
    BCGAZ2 = "bcgaz2"
    OIC = "oic"
    PSL = "psl"
    ECB = "ecb"
    HSCR = "hscr"
    ARCH_OIC = "arch_oic"


@dataclasses.dataclass
class GetContentAspectIDCivixDocumentIDPathParams:
    aspect_id: GetContentAspectIDCivixDocumentIDAspectIDEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'aspectId', 'style': 'simple', 'explode': False }})
    civix_document_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'civixDocumentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContentAspectIDCivixDocumentIDRequest:
    path_params: GetContentAspectIDCivixDocumentIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContentAspectIDCivixDocumentIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
