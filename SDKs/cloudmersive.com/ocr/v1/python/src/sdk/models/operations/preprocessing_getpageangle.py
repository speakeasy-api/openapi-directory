import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import getpageangleresult as shared_getpageangleresult


@dataclasses.dataclass
class PreprocessingGetPageAngleRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class PreprocessingGetPageAngleRequestBody:
    image_file: PreprocessingGetPageAngleRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PreprocessingGetPageAngleSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PreprocessingGetPageAngleRequest:
    request: PreprocessingGetPageAngleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PreprocessingGetPageAngleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PreprocessingGetPageAngleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_page_angle_result: Optional[shared_getpageangleresult.GetPageAngleResult] = dataclasses.field(default=None)
    
