"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import featureflags_enum as shared_featureflags_enum
from ..shared import itemlist as shared_itemlist
from ..shared import serviceerror as shared_serviceerror
from typing import Optional


@dataclasses.dataclass
class GetItemRelatedListRequest:
    
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""The identifier of the item to based related items off."""  
    device: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    r"""The type of device the content is targeting."""  
    ff: Optional[list[shared_featureflags_enum.FeatureFlagsEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    r"""The set of opt in feature flags which cause breaking changes to responses.
    
    While Rocket APIs look to avoid breaking changes under the active major version, the formats of responses
    may need to evolve over this time.
    
    These feature flags allow clients to select which response formats they expect and avoid breaking
    clients as these formats evolve under the current major version.
    
    ### Flags
    
    - `all` - Enable all flags. Useful for testing. _Don't use in production_.
    - `idp` - Dynamic item detail pages with schedulable rows.
    - `ldp` - Dynamic list detail pages with schedulable rows.
    - `hb` - Hubble formatted image urls.
    - `rpt` - Updated resume point threshold logic.
    - `cas` - \"Custom Asset Search\", inlcude `customAssets` in search results.
    - `lrl` - Do not pre-populate related list if more than `max_list_prefetch` down the page.
    - `cd` - Custom Destination support.
    
    See the `feature-flags.md` for available flag details.
    """  
    lang: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    r"""Language code for the preferred language to be returned in the response.
    
    Parameter value is case-insensitive and should be
      - a valid 2 letter language code without region such as en, de
      - or with region such as en_us, en_au
    
    If undefined then defaults to 'en', unless the server has been configured
    with a custom default.
    
    See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    """  
    max_rating: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_rating', 'style': 'form', 'explode': True }})
    r"""The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""The page of items to load. Starts from page 1."""  
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    r"""The number of items to return in a page."""  
    segments: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    r"""The list of segments to filter the response by."""  
    sub: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sub', 'style': 'form', 'explode': True }})
    r"""The active subscription code."""  
    

@dataclasses.dataclass
class GetItemRelatedListResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    item_list: Optional[shared_itemlist.ItemList] = dataclasses.field(default=None)
    r"""The list of items requested."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    service_error: Optional[shared_serviceerror.ServiceError] = dataclasses.field(default=None)
    r"""Bad request."""  
    