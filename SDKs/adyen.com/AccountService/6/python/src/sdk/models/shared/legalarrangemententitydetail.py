"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import businessdetails as shared_businessdetails
from ..shared import individualdetails as shared_individualdetails
from ..shared import viasaddress as shared_viasaddress
from ..shared import viasphonenumber as shared_viasphonenumber
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class LegalArrangementEntityDetailLegalArrangementMembersEnum(str, Enum):
    BENEFICIARY = 'Beneficiary'
    CONTROLLING_PERSON = 'ControllingPerson'
    PARTNER = 'Partner'
    PROTECTOR = 'Protector'
    SETTLOR = 'Settlor'
    SHAREHOLDER = 'Shareholder'
    TRUSTEE = 'Trustee'

class LegalArrangementEntityDetailLegalEntityTypeEnum(str, Enum):
    r"""The legal entity type.
    
    Possible values: **Business**, **Individual**, **NonProfit**, **PublicCompany**, or **Partnership**.
    """
    BUSINESS = 'Business'
    INDIVIDUAL = 'Individual'
    NON_PROFIT = 'NonProfit'
    PARTNERSHIP = 'Partnership'
    PUBLIC_COMPANY = 'PublicCompany'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class LegalArrangementEntityDetail:
    
    address: Optional[shared_viasaddress.ViasAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('address'), 'exclude': lambda f: f is None }})  
    business_details: Optional[shared_businessdetails.BusinessDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('businessDetails'), 'exclude': lambda f: f is None }})  
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('email'), 'exclude': lambda f: f is None }})
    r"""The e-mail address of the entity."""  
    full_phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('fullPhoneNumber'), 'exclude': lambda f: f is None }})
    r"""The phone number of the contact provided as a single string.  It will be handled as a landline phone.
    **Examples:** \"0031 6 11 22 33 44\", \"+316/1122-3344\", \"(0031) 611223344\" 
    """  
    individual_details: Optional[shared_individualdetails.IndividualDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('individualDetails'), 'exclude': lambda f: f is None }})  
    legal_arrangement_entity_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('legalArrangementEntityCode'), 'exclude': lambda f: f is None }})
    r"""Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement entity.
    Use only when updating an account holder. If you include this field when creating an account holder, the request will fail.
    """  
    legal_arrangement_entity_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('legalArrangementEntityReference'), 'exclude': lambda f: f is None }})
    r"""Your reference for the legal arrangement entity."""  
    legal_arrangement_members: Optional[list[LegalArrangementEntityDetailLegalArrangementMembersEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('legalArrangementMembers'), 'exclude': lambda f: f is None }})
    r"""An array containing the roles of the entity in the legal arrangement.
    
    The possible values depend on the legal arrangement `type`.
    
    - For `type` **Association**: **ControllingPerson** and **Shareholder**.
    
    - For `type` **Partnership**: **Partner** and **Shareholder**.
    
    - For `type` **Trust**: **Trustee**, **Settlor**, **Protector**, **Beneficiary**,  and **Shareholder**.
    """  
    legal_entity_type: Optional[LegalArrangementEntityDetailLegalEntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('legalEntityType'), 'exclude': lambda f: f is None }})
    r"""The legal entity type.
    
    Possible values: **Business**, **Individual**, **NonProfit**, **PublicCompany**, or **Partnership**.
    """  
    phone_number: Optional[shared_viasphonenumber.ViasPhoneNumber] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('phoneNumber'), 'exclude': lambda f: f is None }})  
    web_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('webAddress'), 'exclude': lambda f: f is None }})
    r"""The URL of the website of the contact."""  
    