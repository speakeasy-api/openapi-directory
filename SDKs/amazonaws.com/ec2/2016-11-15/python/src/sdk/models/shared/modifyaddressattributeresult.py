import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class ModifyAddressAttributeResultAddressPtrRecordUpdate:
    r"""ModifyAddressAttributeResultAddressPtrRecordUpdate
    The updated PTR record for the IP address.
    """
    
    reason: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[dict[str, Any]] = dataclasses.field(default=None)
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyAddressAttributeResultAddress:
    r"""ModifyAddressAttributeResultAddress
    Information about the Elastic IP address.
    """
    
    allocation_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ptr_record: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ptr_record_update: Optional[ModifyAddressAttributeResultAddressPtrRecordUpdate] = dataclasses.field(default=None)
    public_ip: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyAddressAttributeResult:
    address: Optional[ModifyAddressAttributeResultAddress] = dataclasses.field(default=None)
    
