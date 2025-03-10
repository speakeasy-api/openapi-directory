"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import updateprofileresponse as shared_updateprofileresponse
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateProfileRequestBodyAddress:
    r"""Updates associated with the address properties of a customer profile."""
    
    address1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address1'), 'exclude': lambda f: f is None }})  
    address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address2'), 'exclude': lambda f: f is None }})  
    address3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address3'), 'exclude': lambda f: f is None }})  
    address4: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address4'), 'exclude': lambda f: f is None }})  
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('City'), 'exclude': lambda f: f is None }})  
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Country'), 'exclude': lambda f: f is None }})  
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('County'), 'exclude': lambda f: f is None }})  
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PostalCode'), 'exclude': lambda f: f is None }})  
    province: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Province'), 'exclude': lambda f: f is None }})  
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('State'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateProfileRequestBodyBillingAddress:
    r"""Updates associated with the address properties of a customer profile."""
    
    address1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address1'), 'exclude': lambda f: f is None }})  
    address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address2'), 'exclude': lambda f: f is None }})  
    address3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address3'), 'exclude': lambda f: f is None }})  
    address4: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address4'), 'exclude': lambda f: f is None }})  
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('City'), 'exclude': lambda f: f is None }})  
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Country'), 'exclude': lambda f: f is None }})  
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('County'), 'exclude': lambda f: f is None }})  
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PostalCode'), 'exclude': lambda f: f is None }})  
    province: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Province'), 'exclude': lambda f: f is None }})  
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('State'), 'exclude': lambda f: f is None }})  
    
class UpdateProfileRequestBodyGenderEnum(str, Enum):
    r"""The gender with which the customer identifies."""
    MALE = 'MALE'
    FEMALE = 'FEMALE'
    UNSPECIFIED = 'UNSPECIFIED'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateProfileRequestBodyMailingAddress:
    r"""Updates associated with the address properties of a customer profile."""
    
    address1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address1'), 'exclude': lambda f: f is None }})  
    address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address2'), 'exclude': lambda f: f is None }})  
    address3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address3'), 'exclude': lambda f: f is None }})  
    address4: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address4'), 'exclude': lambda f: f is None }})  
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('City'), 'exclude': lambda f: f is None }})  
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Country'), 'exclude': lambda f: f is None }})  
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('County'), 'exclude': lambda f: f is None }})  
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PostalCode'), 'exclude': lambda f: f is None }})  
    province: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Province'), 'exclude': lambda f: f is None }})  
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('State'), 'exclude': lambda f: f is None }})  
    
class UpdateProfileRequestBodyPartyTypeEnum(str, Enum):
    r"""The type of profile used to describe the customer."""
    INDIVIDUAL = 'INDIVIDUAL'
    BUSINESS = 'BUSINESS'
    OTHER = 'OTHER'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateProfileRequestBodyShippingAddress:
    r"""Updates associated with the address properties of a customer profile."""
    
    address1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address1'), 'exclude': lambda f: f is None }})  
    address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address2'), 'exclude': lambda f: f is None }})  
    address3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address3'), 'exclude': lambda f: f is None }})  
    address4: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address4'), 'exclude': lambda f: f is None }})  
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('City'), 'exclude': lambda f: f is None }})  
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Country'), 'exclude': lambda f: f is None }})  
    county: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('County'), 'exclude': lambda f: f is None }})  
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PostalCode'), 'exclude': lambda f: f is None }})  
    province: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Province'), 'exclude': lambda f: f is None }})  
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('State'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateProfileRequestBody:
    
    profile_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProfileId') }})
    r"""The unique identifier of a customer profile."""  
    account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AccountNumber'), 'exclude': lambda f: f is None }})
    r"""A unique account number that you have given to the customer."""  
    additional_information: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AdditionalInformation'), 'exclude': lambda f: f is None }})
    r"""Any additional information relevant to the customer’s profile."""  
    address: Optional[UpdateProfileRequestBodyAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Address'), 'exclude': lambda f: f is None }})
    r"""Updates associated with the address properties of a customer profile."""  
    attributes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Attributes'), 'exclude': lambda f: f is None }})
    r"""A key value pair of attributes of a customer profile."""  
    billing_address: Optional[UpdateProfileRequestBodyBillingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BillingAddress'), 'exclude': lambda f: f is None }})
    r"""Updates associated with the address properties of a customer profile."""  
    birth_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BirthDate'), 'exclude': lambda f: f is None }})
    r"""The customer’s birth date."""  
    business_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BusinessEmailAddress'), 'exclude': lambda f: f is None }})
    r"""The customer’s business email address."""  
    business_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BusinessName'), 'exclude': lambda f: f is None }})
    r"""The name of the customer’s business."""  
    business_phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BusinessPhoneNumber'), 'exclude': lambda f: f is None }})
    r"""The customer’s business phone number."""  
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EmailAddress'), 'exclude': lambda f: f is None }})
    r"""The customer’s email address, which has not been specified as a personal or business address."""  
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FirstName'), 'exclude': lambda f: f is None }})
    r"""The customer’s first name."""  
    gender: Optional[UpdateProfileRequestBodyGenderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Gender'), 'exclude': lambda f: f is None }})
    r"""The gender with which the customer identifies."""  
    gender_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('GenderString'), 'exclude': lambda f: f is None }})
    r"""An alternative to <code>Gender</code> which accepts any string as input."""  
    home_phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('HomePhoneNumber'), 'exclude': lambda f: f is None }})
    r"""The customer’s home phone number."""  
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LastName'), 'exclude': lambda f: f is None }})
    r"""The customer’s last name."""  
    mailing_address: Optional[UpdateProfileRequestBodyMailingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MailingAddress'), 'exclude': lambda f: f is None }})
    r"""Updates associated with the address properties of a customer profile."""  
    middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MiddleName'), 'exclude': lambda f: f is None }})
    r"""The customer’s middle name."""  
    mobile_phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MobilePhoneNumber'), 'exclude': lambda f: f is None }})
    r"""The customer’s mobile phone number."""  
    party_type: Optional[UpdateProfileRequestBodyPartyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PartyType'), 'exclude': lambda f: f is None }})
    r"""The type of profile used to describe the customer."""  
    party_type_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PartyTypeString'), 'exclude': lambda f: f is None }})
    r"""An alternative to <code>PartyType</code> which accepts any string as input."""  
    personal_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PersonalEmailAddress'), 'exclude': lambda f: f is None }})
    r"""The customer’s personal email address."""  
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PhoneNumber'), 'exclude': lambda f: f is None }})
    r"""The customer’s phone number, which has not been specified as a mobile, home, or business number."""  
    shipping_address: Optional[UpdateProfileRequestBodyShippingAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ShippingAddress'), 'exclude': lambda f: f is None }})
    r"""Updates associated with the address properties of a customer profile."""  
    

@dataclasses.dataclass
class UpdateProfileRequest:
    
    domain_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainName', 'style': 'simple', 'explode': False }})
    r"""The unique name of the domain."""  
    request_body: UpdateProfileRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class UpdateProfileResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    r"""AccessDeniedException"""  
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    r"""BadRequestException"""  
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ThrottlingException"""  
    update_profile_response: Optional[shared_updateprofileresponse.UpdateProfileResponse] = dataclasses.field(default=None)
    r"""Success"""  
    