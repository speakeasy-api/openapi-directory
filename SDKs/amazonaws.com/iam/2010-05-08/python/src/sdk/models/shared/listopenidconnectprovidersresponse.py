"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import openidconnectproviderlistentry as shared_openidconnectproviderlistentry
from typing import Optional


@dataclasses.dataclass
class ListOpenIDConnectProvidersResponse:
    r"""Contains the response to a successful <a>ListOpenIDConnectProviders</a> request."""
    
    open_id_connect_provider_list: Optional[list[shared_openidconnectproviderlistentry.OpenIDConnectProviderListEntry]] = dataclasses.field(default=None)  
    