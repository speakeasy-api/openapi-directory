import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import providertype_enum as shared_providertype_enum
from ..shared import repositoryassociationstate_enum as shared_repositoryassociationstate_enum
from ..shared import listrepositoryassociationsresponse as shared_listrepositoryassociationsresponse


@dataclasses.dataclass
class ListRepositoryAssociationsQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Name', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    owner: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Owner', 'style': 'form', 'explode': True }})
    provider_type: Optional[list[shared_providertype_enum.ProviderTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ProviderType', 'style': 'form', 'explode': True }})
    state: Optional[list[shared_repositoryassociationstate_enum.RepositoryAssociationStateEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'State', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListRepositoryAssociationsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRepositoryAssociationsRequest:
    headers: ListRepositoryAssociationsHeaders = dataclasses.field()
    query_params: ListRepositoryAssociationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListRepositoryAssociationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    list_repository_associations_response: Optional[shared_listrepositoryassociationsresponse.ListRepositoryAssociationsResponse] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
