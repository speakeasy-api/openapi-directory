import dataclasses



@dataclasses.dataclass
class GetArtifactByGlobalIDPathParams:
    global_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'globalId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetArtifactByGlobalIDRequest:
    path_params: GetArtifactByGlobalIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetArtifactByGlobalIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
