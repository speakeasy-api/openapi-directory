"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Any, Optional


@dataclasses.dataclass
class WebHookManagementDeleteAllResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    web_hook_management_delete_all_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""OK"""  
    web_hook_management_delete_all_200_text_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""OK"""  
    