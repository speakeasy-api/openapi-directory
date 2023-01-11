import dataclasses
from ..shared import accesskey as shared_accesskey


@dataclasses.dataclass
class CreateAccessKeyResponse:
    r"""CreateAccessKeyResponse
    Contains the response to a successful <a>CreateAccessKey</a> request. 
    """
    
    access_key: shared_accesskey.AccessKey = dataclasses.field()
    
