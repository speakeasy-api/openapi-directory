import dataclasses



@dataclasses.dataclass
class GetUserPolicyResponse:
    r"""GetUserPolicyResponse
    Contains the response to a successful <a>GetUserPolicy</a> request. 
    """
    
    policy_document: str = dataclasses.field()
    policy_name: str = dataclasses.field()
    user_name: str = dataclasses.field()
    
