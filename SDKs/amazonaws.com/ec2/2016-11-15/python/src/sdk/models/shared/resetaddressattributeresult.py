import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class ResetAddressAttributeResultAddressPtrRecordUpdate:
    r"""ResetAddressAttributeResultAddressPtrRecordUpdate
    The updated PTR record for the IP address.
    """
    
    reason: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[dict[str, Any]] = dataclasses.field(default=None)
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ResetAddressAttributeResultAddress:
    r"""ResetAddressAttributeResultAddress
    Information about the IP address.
    """
    
    allocation_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ptr_record: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ptr_record_update: Optional[ResetAddressAttributeResultAddressPtrRecordUpdate] = dataclasses.field(default=None)
    public_ip: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ResetAddressAttributeResult:
    address: Optional[ResetAddressAttributeResultAddress] = dataclasses.field(default=None)
    
