import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostConfigApacheSlingGetServletQueryParams:
    enable_html: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enable.html', 'style': 'form', 'explode': True }})
    enable_html_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enable.html@TypeHint', 'style': 'form', 'explode': True }})
    enable_txt: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enable.txt', 'style': 'form', 'explode': True }})
    enable_txt_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enable.txt@TypeHint', 'style': 'form', 'explode': True }})
    enable_xml: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enable.xml', 'style': 'form', 'explode': True }})
    enable_xml_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enable.xml@TypeHint', 'style': 'form', 'explode': True }})
    json_maximumresults: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'json.maximumresults', 'style': 'form', 'explode': True }})
    json_maximumresults_at_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'json.maximumresults@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostConfigApacheSlingGetServletRequest:
    query_params: PostConfigApacheSlingGetServletQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostConfigApacheSlingGetServletResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
