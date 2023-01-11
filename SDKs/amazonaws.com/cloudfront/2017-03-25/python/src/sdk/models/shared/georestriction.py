import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import georestrictiontype_enum as shared_georestrictiontype_enum


@dataclasses.dataclass
class GeoRestriction:
    r"""GeoRestriction
    A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases. 
    """
    
    quantity: int = dataclasses.field()
    restriction_type: shared_georestrictiontype_enum.GeoRestrictionTypeEnum = dataclasses.field()
    items: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
