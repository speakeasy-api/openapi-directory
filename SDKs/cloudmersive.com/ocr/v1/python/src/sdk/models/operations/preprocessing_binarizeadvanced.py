import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PreprocessingBinarizeAdvancedRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class PreprocessingBinarizeAdvancedRequestBody:
    image_file: PreprocessingBinarizeAdvancedRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PreprocessingBinarizeAdvancedSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PreprocessingBinarizeAdvancedRequest:
    request: PreprocessingBinarizeAdvancedRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PreprocessingBinarizeAdvancedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PreprocessingBinarizeAdvancedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preprocessing_binarize_advanced_200_application_json_byte_string: Optional[str] = dataclasses.field(default=None)
    preprocessing_binarize_advanced_200_application_xml_byte_string: Optional[str] = dataclasses.field(default=None)
    preprocessing_binarize_advanced_200_text_json_byte_string: Optional[str] = dataclasses.field(default=None)
    preprocessing_binarize_advanced_200_text_xml_byte_string: Optional[str] = dataclasses.field(default=None)
    
