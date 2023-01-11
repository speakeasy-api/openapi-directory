import dataclasses



@dataclasses.dataclass
class FileDownloadPathParams:
    file_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FileDownloadRequest:
    path_params: FileDownloadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class FileDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
