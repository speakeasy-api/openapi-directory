import dataclasses



@dataclasses.dataclass
class GetLookupPathParams:
    md5: str = dataclasses.field(metadata={'path_param': { 'field_name': 'md5', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLookupRequest:
    path_params: GetLookupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLookupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
