import dataclasses



@dataclasses.dataclass
class GetVersionIncidentsIDFormatPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVersionIncidentsIDFormatRequest:
    path_params: GetVersionIncidentsIDFormatPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVersionIncidentsIDFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
