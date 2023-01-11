import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import onemandates_get_responses_200_content_application_1json_schema_properties_mandates_items as shared_onemandates_get_responses_200_content_application_1json_schema_properties_mandates_items


@dataclasses.dataclass
class GetMandatePathParams:
    mandate_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'mandateUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMandateRequest:
    path_params: GetMandatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMandateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    onemandates_get_responses_200_content_application_1json_schema_properties_mandates_items: Optional[shared_onemandates_get_responses_200_content_application_1json_schema_properties_mandates_items.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems] = dataclasses.field(default=None)
    
