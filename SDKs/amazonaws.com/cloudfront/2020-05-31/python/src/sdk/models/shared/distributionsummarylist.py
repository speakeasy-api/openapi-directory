import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import aliasicprecordals as shared_aliasicprecordals
from ..shared import aliases as shared_aliases
from ..shared import cachebehaviors as shared_cachebehaviors
from ..shared import customerrorresponses as shared_customerrorresponses
from ..shared import defaultcachebehavior as shared_defaultcachebehavior
from ..shared import httpversion_enum as shared_httpversion_enum
from ..shared import origingroups as shared_origingroups
from ..shared import origins as shared_origins
from ..shared import priceclass_enum as shared_priceclass_enum
from ..shared import restrictions as shared_restrictions
from ..shared import viewercertificate as shared_viewercertificate


@dataclasses.dataclass
class DistributionSummaryList:
    r"""DistributionSummaryList
    A summary of the information about a CloudFront distribution.
    """
    
    arn: str = dataclasses.field()
    aliases: shared_aliases.Aliases = dataclasses.field()
    cache_behaviors: shared_cachebehaviors.CacheBehaviors = dataclasses.field()
    comment: str = dataclasses.field()
    custom_error_responses: shared_customerrorresponses.CustomErrorResponses = dataclasses.field()
    default_cache_behavior: shared_defaultcachebehavior.DefaultCacheBehavior = dataclasses.field()
    domain_name: str = dataclasses.field()
    enabled: bool = dataclasses.field()
    http_version: shared_httpversion_enum.HTTPVersionEnum = dataclasses.field()
    id: str = dataclasses.field()
    is_ipv6_enabled: bool = dataclasses.field()
    last_modified_time: datetime = dataclasses.field()
    origins: shared_origins.Origins = dataclasses.field()
    price_class: shared_priceclass_enum.PriceClassEnum = dataclasses.field()
    restrictions: shared_restrictions.Restrictions = dataclasses.field()
    status: str = dataclasses.field()
    viewer_certificate: shared_viewercertificate.ViewerCertificate = dataclasses.field()
    web_acl_id: str = dataclasses.field()
    alias_icp_recordals: Optional[list[shared_aliasicprecordals.AliasIcpRecordals]] = dataclasses.field(default=None)
    origin_groups: Optional[shared_origingroups.OriginGroups] = dataclasses.field(default=None)
    
