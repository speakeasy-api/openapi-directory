import dataclasses
from typing import Optional


@dataclasses.dataclass
class AccessSetAcldbPathParams:
    database_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'databaseName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccessSetAcldbRequest:
    path_params: AccessSetAcldbPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AccessSetAcldbResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_set_acldb_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
