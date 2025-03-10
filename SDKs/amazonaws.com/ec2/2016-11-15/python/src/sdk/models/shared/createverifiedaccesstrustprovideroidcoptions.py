"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class CreateVerifiedAccessTrustProviderOidcOptions:
    r"""Options for an OIDC-based, user-identity type trust provider."""
    
    authorization_endpoint: Optional[str] = dataclasses.field(default=None)  
    client_id: Optional[str] = dataclasses.field(default=None)  
    client_secret: Optional[str] = dataclasses.field(default=None)  
    issuer: Optional[str] = dataclasses.field(default=None)  
    scope: Optional[str] = dataclasses.field(default=None)  
    token_endpoint: Optional[str] = dataclasses.field(default=None)  
    user_info_endpoint: Optional[str] = dataclasses.field(default=None)  
    