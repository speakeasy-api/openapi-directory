import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class UpdateSamlProviderResponse:
    r"""UpdateSamlProviderResponse
    Contains the response to a successful <a>UpdateSAMLProvider</a> request. 
    """
    
    saml_provider_arn: Optional[str] = dataclasses.field(default=None)
    
