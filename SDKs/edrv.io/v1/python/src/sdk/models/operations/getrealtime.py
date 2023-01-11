import dataclasses



@dataclasses.dataclass
class GetRealtimeHeaders:
    sec_websocket_protocol: str = dataclasses.field(metadata={'header': { 'field_name': 'sec-websocket-protocol', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRealtimeRequest:
    headers: GetRealtimeHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetRealtimeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
