import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class GetOpenIDConnectProviderResponse:
    r"""GetOpenIDConnectProviderResponse
    Contains the response to a successful <a>GetOpenIDConnectProvider</a> request. 
    """
    
    client_id_list: Optional[list[str]] = dataclasses.field(default=None)
    create_date: Optional[datetime] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    thumbprint_list: Optional[list[str]] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
