"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetShippingLabelInput:
    
    job_ids: list[str] = dataclasses.field()  
    api_version: Optional[str] = dataclasses.field(default=None)
    r"""Specifies the version of the client tool."""  
    city: Optional[str] = dataclasses.field(default=None)
    r"""Specifies the name of your city for the return address."""  
    company: Optional[str] = dataclasses.field(default=None)
    r"""Specifies the name of the company that will ship this package."""  
    country: Optional[str] = dataclasses.field(default=None)
    r"""Specifies the name of your country for the return address."""  
    name: Optional[str] = dataclasses.field(default=None)
    r"""Specifies the name of the person responsible for shipping this package."""  
    phone_number: Optional[str] = dataclasses.field(default=None)
    r"""Specifies the phone number of the person responsible for shipping this package."""  
    postal_code: Optional[str] = dataclasses.field(default=None)
    r"""Specifies the postal code for the return address."""  
    state_or_province: Optional[str] = dataclasses.field(default=None)
    r"""Specifies the name of your state or your province for the return address."""  
    street1: Optional[str] = dataclasses.field(default=None)
    r"""Specifies the first part of the street address for the return address, for example 1234 Main Street."""  
    street2: Optional[str] = dataclasses.field(default=None)
    r"""Specifies the optional second part of the street address for the return address, for example Suite 100."""  
    street3: Optional[str] = dataclasses.field(default=None)
    r"""Specifies the optional third part of the street address for the return address, for example c/o Jane Doe."""  
    