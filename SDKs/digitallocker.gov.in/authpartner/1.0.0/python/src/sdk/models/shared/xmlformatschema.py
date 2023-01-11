import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class XMLFormatSchemaSignatureKeyInfo:
    x509_data: Optional[Any] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class XMLFormatSchemaSignature:
    key_info: XMLFormatSchemaSignatureKeyInfo = dataclasses.field()
    signature_value: Optional[Any] = dataclasses.field(default=None)
    signed_info: Optional[Any] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class XMLFormatSchema:
    certificate_data: list[Any] = dataclasses.field()
    signature: XMLFormatSchemaSignature = dataclasses.field()
    
