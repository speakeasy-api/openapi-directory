import dataclasses
from typing import Optional
from ..shared import dbproxy as shared_dbproxy


@dataclasses.dataclass
class DeleteDbProxyResponse:
    db_proxy: Optional[shared_dbproxy.DbProxy] = dataclasses.field(default=None)
    
