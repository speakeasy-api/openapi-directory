"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class BusinessCardRecognitionResult:
    r"""Result of recognizing a business card, to extract the key information from the business card"""
    
    address_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AddressString'), 'exclude': lambda f: f is None }})
    r"""The address printed on the business card (if included on the business card)"""  
    business_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BusinessName'), 'exclude': lambda f: f is None }})
    r"""The name of the business printed on the business card (if included on the business card)"""  
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EmailAddress'), 'exclude': lambda f: f is None }})
    r"""The email address printed on the business card (if included on the business card)"""  
    person_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PersonName'), 'exclude': lambda f: f is None }})
    r"""The name of the person printed on the business card (if included on the business card)"""  
    person_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PersonTitle'), 'exclude': lambda f: f is None }})
    r"""The title of the person printed on the business card (if included on the business card)"""  
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PhoneNumber'), 'exclude': lambda f: f is None }})
    r"""The phone number printed on the business card (if included on the business card)"""  
    successful: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Successful'), 'exclude': lambda f: f is None }})
    r"""True if the operation was successful, false otherwise"""  
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date and time printed on the business card (if included on the business card)"""  
    