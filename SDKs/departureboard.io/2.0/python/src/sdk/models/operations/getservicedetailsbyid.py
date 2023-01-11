import dataclasses



@dataclasses.dataclass
class GetServiceDetailsByIDPathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetServiceDetailsByIDQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetServiceDetailsByIDRequest:
    path_params: GetServiceDetailsByIDPathParams = dataclasses.field()
    query_params: GetServiceDetailsByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetServiceDetailsByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
