import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import origingroupfailovercriteria as shared_origingroupfailovercriteria
from ..shared import origingroupmembers as shared_origingroupmembers


@dataclasses.dataclass
class OriginGroupList:
    r"""OriginGroupList
    An origin group includes two origins (a primary origin and a second origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specifiy the origin group instead of a single origin, and CloudFront will failover from the primary origin to the second origin under the failover conditions that you've chosen.
    """
    
    failover_criteria: shared_origingroupfailovercriteria.OriginGroupFailoverCriteria = dataclasses.field()
    id: str = dataclasses.field()
    members: shared_origingroupmembers.OriginGroupMembers = dataclasses.field()
    
