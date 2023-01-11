import dataclasses



@dataclasses.dataclass
class AssumedRoleUser:
    r"""AssumedRoleUser
    The identifiers for the temporary security credentials that the operation returns.
    """
    
    arn: str = dataclasses.field()
    assumed_role_id: str = dataclasses.field()
    
