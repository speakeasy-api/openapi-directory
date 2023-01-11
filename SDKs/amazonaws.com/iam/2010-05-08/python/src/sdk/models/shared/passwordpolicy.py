import dataclasses
from typing import Optional


@dataclasses.dataclass
class PasswordPolicy:
    r"""PasswordPolicy
    <p>Contains information about the account password policy.</p> <p> This data type is used as a response element in the <a>GetAccountPasswordPolicy</a> operation. </p>
    """
    
    allow_users_to_change_password: Optional[bool] = dataclasses.field(default=None)
    expire_passwords: Optional[bool] = dataclasses.field(default=None)
    hard_expiry: Optional[bool] = dataclasses.field(default=None)
    max_password_age: Optional[int] = dataclasses.field(default=None)
    minimum_password_length: Optional[int] = dataclasses.field(default=None)
    password_reuse_prevention: Optional[int] = dataclasses.field(default=None)
    require_lowercase_characters: Optional[bool] = dataclasses.field(default=None)
    require_numbers: Optional[bool] = dataclasses.field(default=None)
    require_symbols: Optional[bool] = dataclasses.field(default=None)
    require_uppercase_characters: Optional[bool] = dataclasses.field(default=None)
    
