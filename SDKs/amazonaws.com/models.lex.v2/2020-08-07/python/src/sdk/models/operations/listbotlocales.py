import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import botlocalesortattribute_enum as shared_botlocalesortattribute_enum
from ..shared import sortorder_enum as shared_sortorder_enum
from ..shared import botlocalefilter as shared_botlocalefilter
from ..shared import listbotlocalesresponse as shared_listbotlocalesresponse


@dataclasses.dataclass
class ListBotLocalesPathParams:
    bot_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botId', 'style': 'simple', 'explode': False }})
    bot_version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'botVersion', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListBotLocalesQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListBotLocalesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListBotLocalesRequestBodySortBy:
    r"""ListBotLocalesRequestBodySortBy
    Specifies attributes for sorting a list of bot locales.
    """
    
    attribute: Optional[shared_botlocalesortattribute_enum.BotLocaleSortAttributeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    order: Optional[shared_sortorder_enum.SortOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    

@dataclass_json
@dataclasses.dataclass
class ListBotLocalesRequestBody:
    filters: Optional[list[shared_botlocalefilter.BotLocaleFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    sort_by: Optional[ListBotLocalesRequestBodySortBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortBy') }})
    

@dataclasses.dataclass
class ListBotLocalesRequest:
    headers: ListBotLocalesHeaders = dataclasses.field()
    path_params: ListBotLocalesPathParams = dataclasses.field()
    query_params: ListBotLocalesQueryParams = dataclasses.field()
    request: ListBotLocalesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListBotLocalesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    list_bot_locales_response: Optional[shared_listbotlocalesresponse.ListBotLocalesResponse] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
