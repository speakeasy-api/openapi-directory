import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptionstatus_enum as shared_subscriptionstatus_enum
from ..shared import topicfilter as shared_topicfilter
from ..shared import listcontactsresponse as shared_listcontactsresponse


@dataclasses.dataclass
class ListContactsPathParams:
    contact_list_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ContactListName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListContactsQueryParams:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListContactsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListContactsRequestBodyFilter:
    r"""ListContactsRequestBodyFilter
    A filter that can be applied to a list of contacts.
    """
    
    filtered_status: Optional[shared_subscriptionstatus_enum.SubscriptionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilteredStatus') }})
    topic_filter: Optional[shared_topicfilter.TopicFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicFilter') }})
    

@dataclass_json
@dataclasses.dataclass
class ListContactsRequestBody:
    filter: Optional[ListContactsRequestBodyFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    

@dataclasses.dataclass
class ListContactsRequest:
    headers: ListContactsHeaders = dataclasses.field()
    path_params: ListContactsPathParams = dataclasses.field()
    query_params: ListContactsQueryParams = dataclasses.field()
    request: ListContactsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListContactsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_contacts_response: Optional[shared_listcontactsresponse.ListContactsResponse] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
