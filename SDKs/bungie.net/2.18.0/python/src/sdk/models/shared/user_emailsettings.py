"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import user_emailoptindefinition as shared_user_emailoptindefinition
from ..shared import user_emailsubscriptiondefinition as shared_user_emailsubscriptiondefinition
from ..shared import user_emailviewdefinition as shared_user_emailviewdefinition
from typing import Optional


@dataclasses.dataclass
class UserEmailSettings:
    r"""The set of all email subscription/opt-in settings and definitions."""
    
    opt_in_definitions: Optional[dict[str, shared_user_emailoptindefinition.UserEmailOptInDefinition]] = dataclasses.field(default=None)
    r"""Keyed by the name identifier of the opt-in definition."""  
    subscription_definitions: Optional[dict[str, shared_user_emailsubscriptiondefinition.UserEmailSubscriptionDefinition]] = dataclasses.field(default=None)
    r"""Keyed by the name identifier of the Subscription definition."""  
    views: Optional[dict[str, shared_user_emailviewdefinition.UserEmailViewDefinition]] = dataclasses.field(default=None)
    r"""Keyed by the name identifier of the View definition."""  
    