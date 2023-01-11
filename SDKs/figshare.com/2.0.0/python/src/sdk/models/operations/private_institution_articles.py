import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import article as shared_article
from ..shared import errormessage as shared_errormessage

class PrivateInstitutionArticlesOrderEnum(str, Enum):
    PUBLISHED_DATE = "published_date"
    MODIFIED_DATE = "modified_date"
    VIEWS = "views"
    SHARES = "shares"
    DOWNLOADS = "downloads"
    CITES = "cites"

class PrivateInstitutionArticlesOrderDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class PrivateInstitutionArticlesQueryParams:
    item_type: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'item_type', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    modified_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modified_since', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[PrivateInstitutionArticlesOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    order_direction: Optional[PrivateInstitutionArticlesOrderDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    published_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'published_since', 'style': 'form', 'explode': True }})
    resource_doi: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resource_doi', 'style': 'form', 'explode': True }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PrivateInstitutionArticlesSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateInstitutionArticlesRequest:
    query_params: PrivateInstitutionArticlesQueryParams = dataclasses.field()
    security: PrivateInstitutionArticlesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateInstitutionArticlesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    articles: Optional[list[shared_article.Article]] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
