import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class GetSamlProviderResponse:
    r"""GetSamlProviderResponse
    Contains the response to a successful <a>GetSAMLProvider</a> request. 
    """
    
    create_date: Optional[datetime] = dataclasses.field(default=None)
    saml_metadata_document: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    valid_until: Optional[datetime] = dataclasses.field(default=None)
    
