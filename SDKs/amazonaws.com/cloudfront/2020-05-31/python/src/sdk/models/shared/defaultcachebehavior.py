import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import cookiepreference as shared_cookiepreference
from ..shared import headers as shared_headers
from ..shared import querystringcachekeys as shared_querystringcachekeys
from ..shared import allowedmethods as shared_allowedmethods
from ..shared import functionassociations as shared_functionassociations
from ..shared import lambdafunctionassociations as shared_lambdafunctionassociations
from ..shared import trustedkeygroups as shared_trustedkeygroups
from ..shared import trustedsigners as shared_trustedsigners
from ..shared import viewerprotocolpolicy_enum as shared_viewerprotocolpolicy_enum


@dataclasses.dataclass
class DefaultCacheBehaviorForwardedValues:
    r"""DefaultCacheBehaviorForwardedValues
    <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html\">Working with policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy\">Creating cache policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html\">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy\">Creating origin request policies</a> or <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html\">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>DefaultCacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
    """
    
    cookies: shared_cookiepreference.CookiePreference = dataclasses.field()
    query_string: bool = dataclasses.field()
    headers: Optional[shared_headers.Headers] = dataclasses.field(default=None)
    query_string_cache_keys: Optional[shared_querystringcachekeys.QueryStringCacheKeys] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DefaultCacheBehavior:
    r"""DefaultCacheBehavior
    A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
    """
    
    target_origin_id: str = dataclasses.field()
    viewer_protocol_policy: shared_viewerprotocolpolicy_enum.ViewerProtocolPolicyEnum = dataclasses.field()
    allowed_methods: Optional[shared_allowedmethods.AllowedMethods] = dataclasses.field(default=None)
    cache_policy_id: Optional[str] = dataclasses.field(default=None)
    compress: Optional[bool] = dataclasses.field(default=None)
    default_ttl: Optional[dict[str, Any]] = dataclasses.field(default=None)
    field_level_encryption_id: Optional[str] = dataclasses.field(default=None)
    forwarded_values: Optional[DefaultCacheBehaviorForwardedValues] = dataclasses.field(default=None)
    function_associations: Optional[shared_functionassociations.FunctionAssociations] = dataclasses.field(default=None)
    lambda_function_associations: Optional[shared_lambdafunctionassociations.LambdaFunctionAssociations] = dataclasses.field(default=None)
    max_ttl: Optional[dict[str, Any]] = dataclasses.field(default=None)
    min_ttl: Optional[dict[str, Any]] = dataclasses.field(default=None)
    origin_request_policy_id: Optional[str] = dataclasses.field(default=None)
    realtime_log_config_arn: Optional[str] = dataclasses.field(default=None)
    smooth_streaming: Optional[bool] = dataclasses.field(default=None)
    trusted_key_groups: Optional[shared_trustedkeygroups.TrustedKeyGroups] = dataclasses.field(default=None)
    trusted_signers: Optional[shared_trustedsigners.TrustedSigners] = dataclasses.field(default=None)
    
