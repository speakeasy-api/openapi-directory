"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses


@dataclasses.dataclass
class FederatedUser:
    r"""Identifiers for the federated user that is associated with the credentials."""
    
    arn: str = dataclasses.field()  
    federated_user_id: str = dataclasses.field()  
    