"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import api_core_dto_accounting_plan as shared_api_core_dto_accounting_plan
from typing import Optional


@dataclasses.dataclass
class MeGetMePlanResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    api_core_dto_accounting_plan: Optional[shared_api_core_dto_accounting_plan.APICoreDtoAccountingPlan] = dataclasses.field(default=None)  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    