import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import oneaccounts_1percent_7bicanpercent_7d_1transactions_get_responses_200_content_application_1json_schema as shared_oneaccounts_1percent_7bicanpercent_7d_1transactions_get_responses_200_content_application_1json_schema


@dataclasses.dataclass
class GetTransactionsFilteredByIDPathParams:
    ican: int = dataclasses.field(metadata={'path_param': { 'field_name': 'ican', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionsFilteredByIDQueryParams:
    date_range_from: float = dataclasses.field(metadata={'query_param': { 'field_name': 'dateRangeFrom', 'style': 'form', 'explode': True }})
    date_range_to: float = dataclasses.field(metadata={'query_param': { 'field_name': 'dateRangeTo', 'style': 'form', 'explode': True }})
    search_keyword: str = dataclasses.field(metadata={'query_param': { 'field_name': 'searchKeyword', 'style': 'form', 'explode': True }})
    transaction_types: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'transactionTypes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTransactionsFilteredByIDRequest:
    path_params: GetTransactionsFilteredByIDPathParams = dataclasses.field()
    query_params: GetTransactionsFilteredByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionsFilteredByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    oneaccounts_1_percent_7_bican_percent_7_d_1transactions_get_responses_200_content_application_1json_schema: Optional[shared_oneaccounts_1percent_7bicanpercent_7d_1transactions_get_responses_200_content_application_1json_schema.Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
