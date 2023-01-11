import dataclasses
from typing import Optional


@dataclasses.dataclass
class CustomVerificationEmailTemplate:
    r"""CustomVerificationEmailTemplate
    Contains information about a custom verification email template.
    """
    
    failure_redirection_url: Optional[str] = dataclasses.field(default=None)
    from_email_address: Optional[str] = dataclasses.field(default=None)
    success_redirection_url: Optional[str] = dataclasses.field(default=None)
    template_name: Optional[str] = dataclasses.field(default=None)
    template_subject: Optional[str] = dataclasses.field(default=None)
    
