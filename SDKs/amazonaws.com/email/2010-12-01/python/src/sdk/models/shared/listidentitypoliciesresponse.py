import dataclasses



@dataclasses.dataclass
class ListIdentityPoliciesResponse:
    r"""ListIdentityPoliciesResponse
    A list of names of sending authorization policies that apply to an identity.
    """
    
    policy_names: list[str] = dataclasses.field()
    
