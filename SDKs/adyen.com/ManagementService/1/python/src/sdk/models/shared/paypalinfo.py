"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PayPalInfo:
    
    payer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('payerId') }})
    r"""PayPal Merchant ID. Character length and limitations: 13 single-byte alphanumeric characters."""  
    subject: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subject') }})
    r"""Your business email address."""  
    direct_capture: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('directCapture'), 'exclude': lambda f: f is None }})
    r"""Indicates if direct (immediate) capture for PayPal is enabled. If set to **true**, this setting overrides the [capture](https://docs.adyen.com/online-payments/capture) settings of your merchant account. Default value: **true**."""  
    