import dataclasses



@dataclasses.dataclass
class FederatedUser:
    r"""FederatedUser
    Identifiers for the federated user that is associated with the credentials.
    """
    
    arn: str = dataclasses.field()
    federated_user_id: str = dataclasses.field()
    
