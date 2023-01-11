import dataclasses
from typing import Optional
from enum import Enum
from ..shared import aliases as shared_aliases
from ..shared import cachebehaviors as shared_cachebehaviors
from ..shared import customerrorresponses as shared_customerrorresponses
from ..shared import defaultcachebehavior as shared_defaultcachebehavior
from ..shared import httpversion_enum as shared_httpversion_enum
from ..shared import loggingconfig as shared_loggingconfig
from ..shared import origins as shared_origins
from ..shared import priceclass_enum as shared_priceclass_enum
from ..shared import restrictions as shared_restrictions
from ..shared import viewercertificate as shared_viewercertificate


@dataclasses.dataclass
class DistributionConfig:
    r"""DistributionConfig
    A distribution configuration.
    """
    
    caller_reference: str = dataclasses.field()
    comment: str = dataclasses.field()
    default_cache_behavior: shared_defaultcachebehavior.DefaultCacheBehavior = dataclasses.field()
    enabled: bool = dataclasses.field()
    origins: shared_origins.Origins = dataclasses.field()
    aliases: Optional[shared_aliases.Aliases] = dataclasses.field(default=None)
    cache_behaviors: Optional[shared_cachebehaviors.CacheBehaviors] = dataclasses.field(default=None)
    custom_error_responses: Optional[shared_customerrorresponses.CustomErrorResponses] = dataclasses.field(default=None)
    default_root_object: Optional[str] = dataclasses.field(default=None)
    http_version: Optional[shared_httpversion_enum.HTTPVersionEnum] = dataclasses.field(default=None)
    is_ipv6_enabled: Optional[bool] = dataclasses.field(default=None)
    logging: Optional[shared_loggingconfig.LoggingConfig] = dataclasses.field(default=None)
    price_class: Optional[shared_priceclass_enum.PriceClassEnum] = dataclasses.field(default=None)
    restrictions: Optional[shared_restrictions.Restrictions] = dataclasses.field(default=None)
    viewer_certificate: Optional[shared_viewercertificate.ViewerCertificate] = dataclasses.field(default=None)
    web_acl_id: Optional[str] = dataclasses.field(default=None)
    
