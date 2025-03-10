"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class ModifyVerifiedAccessTrustProviderOidcOptions:
    r"""OpenID Connect options for an <code>oidc</code>-type, user-identity based trust provider."""
    
    scope: Optional[str] = dataclasses.field(default=None)  
    