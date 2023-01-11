import dataclasses



@dataclasses.dataclass
class CloudFrontOriginAccessIdentitySummaryList:
    r"""CloudFrontOriginAccessIdentitySummaryList
    Summary of the information about a CloudFront origin access identity.
    """
    
    comment: str = dataclasses.field()
    id: str = dataclasses.field()
    s3_canonical_user_id: str = dataclasses.field()
    
