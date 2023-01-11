import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nameserver as shared_nameserver


@dataclass_json
@dataclasses.dataclass
class UpdateDomainNameserversRequest:
    r"""UpdateDomainNameserversRequest
    <p>Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p>
    """
    
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    nameservers: list[shared_nameserver.Nameserver] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Nameservers') }})
    fi_auth_key: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FIAuthKey') }})
    
