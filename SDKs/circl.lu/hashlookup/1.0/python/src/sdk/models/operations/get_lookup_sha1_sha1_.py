import dataclasses



@dataclasses.dataclass
class GetLookupSha1Sha1PathParams:
    sha1: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sha1', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLookupSha1Sha1Request:
    path_params: GetLookupSha1Sha1PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLookupSha1Sha1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
