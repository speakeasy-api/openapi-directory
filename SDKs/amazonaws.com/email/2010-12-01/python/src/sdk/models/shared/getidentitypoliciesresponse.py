import dataclasses



@dataclasses.dataclass
class GetIdentityPoliciesResponse:
    r"""GetIdentityPoliciesResponse
    Represents the requested sending authorization policies.
    """
    
    policies: dict[str, str] = dataclasses.field()
    
