"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import amount as shared_amount
from ..shared import name as shared_name
from ..shared import recurring as shared_recurring
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from enum import Enum
from marshmallow import fields
from sdk import utils
from typing import Optional

class SubmitRequestEntityTypeEnum(str, Enum):
    r"""The type of the entity the payout is processed for.
    
    Allowed values:
    * NaturalPerson
    * Company
    > This field is required to update the existing `entityType` that is associated with this recurring contract.
    """
    NATURAL_PERSON = 'NaturalPerson'
    COMPANY = 'Company'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SubmitRequest:
    
    amount: shared_amount.Amount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('amount') }})  
    merchant_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('merchantAccount') }})
    r"""The merchant account identifier you want to process the transaction request with."""  
    recurring: shared_recurring.Recurring = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('recurring') }})  
    reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('reference') }})
    r"""The merchant reference for this payout. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement."""  
    selected_recurring_detail_reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('selectedRecurringDetailReference') }})
    r"""This is the `recurringDetailReference` you want to use for this payout.
    
    You can use the value LATEST to select the most recently used recurring detail.
    """  
    shopper_email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('shopperEmail') }})
    r"""The shopper's email address."""  
    shopper_reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('shopperReference') }})
    r"""The shopper's reference for the payout transaction."""  
    additional_data: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('additionalData'), 'exclude': lambda f: f is None }})
    r"""This field contains additional data, which may be required for a particular request."""  
    date_of_birth: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dateOfBirth'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})
    r"""The date of birth.
    Format: ISO-8601; example: YYYY-MM-DD
    
    For Paysafecard it must be the same as used when registering the Paysafecard account.
    
    > This field is mandatory for natural persons. 
    > This field is required to update the existing `dateOfBirth` that is associated with this recurring contract.
    """  
    entity_type: Optional[SubmitRequestEntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('entityType'), 'exclude': lambda f: f is None }})
    r"""The type of the entity the payout is processed for.
    
    Allowed values:
    * NaturalPerson
    * Company
    > This field is required to update the existing `entityType` that is associated with this recurring contract.
    """  
    fraud_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('fraudOffset'), 'exclude': lambda f: f is None }})
    r"""An integer value that is added to the normal fraud score. The value can be either positive or negative."""  
    nationality: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nationality'), 'exclude': lambda f: f is None }})
    r"""The shopper's nationality.
    
    A valid value is an ISO 2-character country code (e.g. 'NL').
    
    > This field is required to update the existing nationality that is associated with this recurring contract.
    """  
    shopper_name: Optional[shared_name.Name] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('shopperName'), 'exclude': lambda f: f is None }})  
    shopper_statement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('shopperStatement'), 'exclude': lambda f: f is None }})
    r"""The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method)."""  
    social_security_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('socialSecurityNumber'), 'exclude': lambda f: f is None }})
    r"""The shopper's social security number."""  
    