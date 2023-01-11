import dataclasses



@dataclasses.dataclass
class GetGroupPolicyResponse:
    r"""GetGroupPolicyResponse
    Contains the response to a successful <a>GetGroupPolicy</a> request. 
    """
    
    group_name: str = dataclasses.field()
    policy_document: str = dataclasses.field()
    policy_name: str = dataclasses.field()
    
