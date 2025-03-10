"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import rechnungsdruck_webapp_controllers_api_apiresult_billbee_interfaces_billbeeapi_model_customerapimodel_ as shared_rechnungsdruck_webapp_controllers_api_apiresult_billbee_interfaces_billbeeapi_model_customerapimodel_
from typing import Optional


@dataclasses.dataclass
class CustomerCreateJSONResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_customer_api_model: Optional[shared_rechnungsdruck_webapp_controllers_api_apiresult_billbee_interfaces_billbeeapi_model_customerapimodel_.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel] = dataclasses.field(default=None)
    r"""OK"""  
    