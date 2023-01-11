import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customverificationemailtemplatemetadata as shared_customverificationemailtemplatemetadata


@dataclass_json
@dataclasses.dataclass
class ListCustomVerificationEmailTemplatesResponse:
    r"""ListCustomVerificationEmailTemplatesResponse
    The following elements are returned by the service.
    """
    
    custom_verification_email_templates: Optional[list[shared_customverificationemailtemplatemetadata.CustomVerificationEmailTemplateMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomVerificationEmailTemplates') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
