import dataclasses
from enum import Enum

class GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnum(str, Enum):
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
class GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLPathParams:
    aspect_id: GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'aspectId', 'style': 'simple', 'explode': False }})
    civix_document_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'civixDocumentId', 'style': 'simple', 'explode': False }})
    civix_index_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'civixIndexId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLRequest:
    path_params: GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
