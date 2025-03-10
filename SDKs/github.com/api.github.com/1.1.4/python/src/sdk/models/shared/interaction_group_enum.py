"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
from enum import Enum

class InteractionGroupEnum(str, Enum):
    r"""The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect."""
    EXISTING_USERS = 'existing_users'
    CONTRIBUTORS_ONLY = 'contributors_only'
    COLLABORATORS_ONLY = 'collaborators_only'
