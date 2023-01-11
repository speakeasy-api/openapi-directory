import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dkimsigningattributesorigin_enum as shared_dkimsigningattributesorigin_enum
from ..shared import dkimstatus_enum as shared_dkimstatus_enum


@dataclass_json
@dataclasses.dataclass
class DkimAttributes:
    r"""DkimAttributes
    <p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html\">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity</p>
    """
    
    signing_attributes_origin: Optional[shared_dkimsigningattributesorigin_enum.DkimSigningAttributesOriginEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAttributesOrigin') }})
    signing_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningEnabled') }})
    status: Optional[shared_dkimstatus_enum.DkimStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    tokens: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tokens') }})
    
