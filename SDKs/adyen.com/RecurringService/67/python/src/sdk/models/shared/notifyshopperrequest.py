"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import amount as shared_amount
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NotifyShopperRequest:
    
    amount: shared_amount.Amount = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('amount') }})  
    merchant_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('merchantAccount') }})
    r"""The merchant account identifier with which you want to process the transaction."""  
    reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('reference') }})
    r"""Pre-debit notification reference sent by the merchant. This is a mandatory field"""  
    shopper_reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('shopperReference') }})
    r"""The ID that uniquely identifies the shopper.
    
    This `shopperReference` must be the same as the `shopperReference` used in the initial payment.
    """  
    billing_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('billingDate'), 'exclude': lambda f: f is None }})
    r"""Date on which the subscription amount will be debited from the shopper. In YYYY-MM-DD format"""  
    billing_sequence_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('billingSequenceNumber'), 'exclude': lambda f: f is None }})
    r"""Sequence of the debit. Depends on Frequency and Billing Attempts Rule."""  
    displayed_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('displayedReference'), 'exclude': lambda f: f is None }})
    r"""Reference of Pre-debit notification that is displayed to the shopper. Optional field. Maps to reference if missing"""  
    recurring_detail_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('recurringDetailReference'), 'exclude': lambda f: f is None }})
    r"""This is the `recurringDetailReference` returned in the response when you created the token."""  
    stored_payment_method_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('storedPaymentMethodId'), 'exclude': lambda f: f is None }})
    r"""This is the `recurringDetailReference` returned in the response when you created the token."""  
    