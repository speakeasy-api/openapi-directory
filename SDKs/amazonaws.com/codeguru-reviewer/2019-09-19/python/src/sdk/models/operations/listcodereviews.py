import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import providertype_enum as shared_providertype_enum
from ..shared import jobstate_enum as shared_jobstate_enum
from ..shared import listcodereviewsresponse as shared_listcodereviewsresponse

class ListCodeReviewsTypeEnum(str, Enum):
    PULL_REQUEST = "PullRequest"
    REPOSITORY_ANALYSIS = "RepositoryAnalysis"


@dataclasses.dataclass
class ListCodeReviewsQueryParams:
    type: ListCodeReviewsTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Type', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    provider_types: Optional[list[shared_providertype_enum.ProviderTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ProviderTypes', 'style': 'form', 'explode': True }})
    repository_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RepositoryNames', 'style': 'form', 'explode': True }})
    states: Optional[list[shared_jobstate_enum.JobStateEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'States', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCodeReviewsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListCodeReviewsRequest:
    headers: ListCodeReviewsHeaders = dataclasses.field()
    query_params: ListCodeReviewsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListCodeReviewsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    list_code_reviews_response: Optional[shared_listcodereviewsresponse.ListCodeReviewsResponse] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
