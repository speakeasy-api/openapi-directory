import dataclasses



@dataclasses.dataclass
class CloudFrontOriginAccessIdentityConfig:
    r"""CloudFrontOriginAccessIdentityConfig
    Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. 
    """
    
    caller_reference: str = dataclasses.field()
    comment: str = dataclasses.field()
    
