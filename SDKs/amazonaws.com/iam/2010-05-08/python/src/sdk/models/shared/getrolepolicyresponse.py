import dataclasses



@dataclasses.dataclass
class GetRolePolicyResponse:
    r"""GetRolePolicyResponse
    Contains the response to a successful <a>GetRolePolicy</a> request. 
    """
    
    policy_document: str = dataclasses.field()
    policy_name: str = dataclasses.field()
    role_name: str = dataclasses.field()
    
