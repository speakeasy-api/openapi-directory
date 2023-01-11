import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostPackageServiceQueryParams:
    cmd: str = dataclasses.field(metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostPackageServiceRequest:
    query_params: PostPackageServiceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostPackageServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_package_service_default_text_xml_string: Optional[str] = dataclasses.field(default=None)
    
