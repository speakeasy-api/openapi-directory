import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import asn1subject as shared_asn1subject
from ..shared import edipartyname as shared_edipartyname
from ..shared import othername as shared_othername


@dataclass_json
@dataclasses.dataclass
class GeneralName:
    r"""GeneralName
    Describes an ASN.1 X.400 <code>GeneralName</code> as defined in <a href=\"https://tools.ietf.org/html/rfc5280\">RFC 5280</a>. Only one of the following naming options should be provided. Providing more than one option results in an <code>InvalidArgsException</code> error.
    """
    
    directory_name: Optional[shared_asn1subject.Asn1Subject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryName') }})
    dns_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsName') }})
    edi_party_name: Optional[shared_edipartyname.EdiPartyName] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EdiPartyName') }})
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddress') }})
    other_name: Optional[shared_othername.OtherName] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherName') }})
    registered_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegisteredId') }})
    rfc822_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rfc822Name') }})
    uniform_resource_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UniformResourceIdentifier') }})
    
