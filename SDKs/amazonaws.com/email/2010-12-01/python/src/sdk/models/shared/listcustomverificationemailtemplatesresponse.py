import dataclasses
from typing import Optional
from ..shared import customverificationemailtemplate as shared_customverificationemailtemplate


@dataclasses.dataclass
class ListCustomVerificationEmailTemplatesResponse:
    r"""ListCustomVerificationEmailTemplatesResponse
    A paginated list of custom verification email templates.
    """
    
    custom_verification_email_templates: Optional[list[shared_customverificationemailtemplate.CustomVerificationEmailTemplate]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
