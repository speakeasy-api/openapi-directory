import dataclasses
from typing import Optional
from ..shared import oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items as shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items


@dataclasses.dataclass
class GetAccountByIDPathParams:
    ican: int = dataclasses.field(metadata={'path_param': { 'field_name': 'ican', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountByIDRequest:
    path_params: GetAccountByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items: Optional[shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems] = dataclasses.field(default=None)
    
