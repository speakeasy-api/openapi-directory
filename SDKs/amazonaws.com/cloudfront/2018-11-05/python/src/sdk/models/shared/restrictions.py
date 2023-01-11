import dataclasses
from ..shared import georestriction as shared_georestriction


@dataclasses.dataclass
class Restrictions:
    r"""Restrictions
    A complex type that identifies ways in which you want to restrict distribution of your content.
    """
    
    geo_restriction: shared_georestriction.GeoRestriction = dataclasses.field()
    
