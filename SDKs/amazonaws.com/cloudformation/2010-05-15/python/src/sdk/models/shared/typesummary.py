"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import identityprovider_enum as shared_identityprovider_enum
from ..shared import registrytype_enum as shared_registrytype_enum
from datetime import datetime
from typing import Optional


@dataclasses.dataclass
class TypeSummary:
    r"""Contains summary information about the specified CloudFormation extension."""
    
    default_version_id: Optional[str] = dataclasses.field(default=None)  
    description: Optional[str] = dataclasses.field(default=None)  
    is_activated: Optional[bool] = dataclasses.field(default=None)  
    last_updated: Optional[datetime] = dataclasses.field(default=None)  
    latest_public_version: Optional[str] = dataclasses.field(default=None)  
    original_type_name: Optional[str] = dataclasses.field(default=None)  
    public_version_number: Optional[str] = dataclasses.field(default=None)  
    publisher_id: Optional[str] = dataclasses.field(default=None)  
    publisher_identity: Optional[shared_identityprovider_enum.IdentityProviderEnum] = dataclasses.field(default=None)  
    publisher_name: Optional[str] = dataclasses.field(default=None)  
    type: Optional[shared_registrytype_enum.RegistryTypeEnum] = dataclasses.field(default=None)  
    type_arn: Optional[str] = dataclasses.field(default=None)  
    type_name: Optional[str] = dataclasses.field(default=None)  
    