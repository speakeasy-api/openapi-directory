"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import rechnungsdruck_webapp_controllers_api_apiaddshipmenttoordermodel as shared_rechnungsdruck_webapp_controllers_api_apiaddshipmenttoordermodel
from typing import Any, Optional


@dataclasses.dataclass
class OrderAPIAddShipmentJSONRequest:
    
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""The internal billbee id of the order"""  
    rechnungsdruck_web_app_controllers_api_api_add_shipment_to_order_model: shared_rechnungsdruck_webapp_controllers_api_apiaddshipmenttoordermodel.RechnungsdruckWebAppControllersAPIAPIAddShipmentToOrderModel = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    r"""The shipment data to create the shipment"""  
    

@dataclasses.dataclass
class OrderAPIAddShipmentJSONResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    order_api_add_shipment_json_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""OK"""  
    order_api_add_shipment_json_200_text_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    