"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class ResetAddressAttributeResultAddressPtrRecordUpdate:
    r"""The updated PTR record for the IP address."""
    
    reason: Optional[str] = dataclasses.field(default=None)  
    status: Optional[str] = dataclasses.field(default=None)  
    value: Optional[str] = dataclasses.field(default=None)  
    

@dataclasses.dataclass
class ResetAddressAttributeResultAddress:
    r"""Information about the IP address."""
    
    allocation_id: Optional[str] = dataclasses.field(default=None)  
    ptr_record: Optional[str] = dataclasses.field(default=None)  
    ptr_record_update: Optional[ResetAddressAttributeResultAddressPtrRecordUpdate] = dataclasses.field(default=None)  
    public_ip: Optional[str] = dataclasses.field(default=None)  
    

@dataclasses.dataclass
class ResetAddressAttributeResult:
    r"""Success"""
    
    address: Optional[ResetAddressAttributeResultAddress] = dataclasses.field(default=None)  
    