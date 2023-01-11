import dataclasses
from typing import Optional
from enum import Enum
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import accountpublications as shared_accountpublications


@dataclasses.dataclass
class GetPublicationsPathParams:
    account_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    marketplace_technical_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'marketplaceTechnicalCode', 'style': 'simple', 'explode': False }})
    
class GetPublicationsPublicationTypesEnum(str, Enum):
    PUBLISH_PRODUCTS = "PublishProducts"
    PUBLISH_OFFERS = "PublishOffers"
    UNPUBLISH = "Unpublish"


@dataclasses.dataclass
class GetPublicationsQueryParams:
    publication_types: list[GetPublicationsPublicationTypesEnum] = dataclasses.field(metadata={'query_param': { 'field_name': 'publicationTypes', 'style': 'form', 'explode': False }})
    channel_catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'channelCatalogId', 'style': 'form', 'explode': True }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPublicationsRequest:
    path_params: GetPublicationsPathParams = dataclasses.field()
    query_params: GetPublicationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPublicationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    account_publications: Optional[shared_accountpublications.AccountPublications] = dataclasses.field(default=None)
    
