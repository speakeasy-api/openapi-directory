import dataclasses
from typing import Optional
from enum import Enum
from ..shared import allowedmethods as shared_allowedmethods
from ..shared import forwardedvalues as shared_forwardedvalues
from ..shared import lambdafunctionassociations as shared_lambdafunctionassociations
from ..shared import trustedsigners as shared_trustedsigners
from ..shared import viewerprotocolpolicy_enum as shared_viewerprotocolpolicy_enum


@dataclasses.dataclass
class DefaultCacheBehavior:
    r"""DefaultCacheBehavior
    A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
    """
    
    forwarded_values: shared_forwardedvalues.ForwardedValues = dataclasses.field()
    min_ttl: int = dataclasses.field()
    target_origin_id: str = dataclasses.field()
    trusted_signers: shared_trustedsigners.TrustedSigners = dataclasses.field()
    viewer_protocol_policy: shared_viewerprotocolpolicy_enum.ViewerProtocolPolicyEnum = dataclasses.field()
    allowed_methods: Optional[shared_allowedmethods.AllowedMethods] = dataclasses.field(default=None)
    compress: Optional[bool] = dataclasses.field(default=None)
    default_ttl: Optional[int] = dataclasses.field(default=None)
    field_level_encryption_id: Optional[str] = dataclasses.field(default=None)
    lambda_function_associations: Optional[shared_lambdafunctionassociations.LambdaFunctionAssociations] = dataclasses.field(default=None)
    max_ttl: Optional[int] = dataclasses.field(default=None)
    smooth_streaming: Optional[bool] = dataclasses.field(default=None)
    
