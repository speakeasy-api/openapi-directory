import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PreprocessingUnrotateAdvancedRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class PreprocessingUnrotateAdvancedRequestBody:
    image_file: PreprocessingUnrotateAdvancedRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PreprocessingUnrotateAdvancedSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PreprocessingUnrotateAdvancedRequest:
    request: PreprocessingUnrotateAdvancedRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PreprocessingUnrotateAdvancedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PreprocessingUnrotateAdvancedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preprocessing_unrotate_advanced_200_application_json_byte_string: Optional[str] = dataclasses.field(default=None)
    preprocessing_unrotate_advanced_200_application_xml_byte_string: Optional[str] = dataclasses.field(default=None)
    preprocessing_unrotate_advanced_200_text_json_byte_string: Optional[str] = dataclasses.field(default=None)
    preprocessing_unrotate_advanced_200_text_xml_byte_string: Optional[str] = dataclasses.field(default=None)
    
