import dataclasses



@dataclasses.dataclass
class AppPkcs12P12File:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    p12_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'p12File' }})
    

@dataclasses.dataclass
class AppPkcs12:
    p12_file: AppPkcs12P12File = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    p12_pass: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'p12Pass' }})
    
