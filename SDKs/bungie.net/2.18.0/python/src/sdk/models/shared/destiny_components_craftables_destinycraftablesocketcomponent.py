"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import destiny_components_craftables_destinycraftablesocketplugcomponent as shared_destiny_components_craftables_destinycraftablesocketplugcomponent
from typing import Optional


@dataclasses.dataclass
class DestinyComponentsCraftablesDestinyCraftableSocketComponent:
    
    plugs: Optional[list[shared_destiny_components_craftables_destinycraftablesocketplugcomponent.DestinyComponentsCraftablesDestinyCraftableSocketPlugComponent]] = dataclasses.field(default=None)
    r"""Unlock state for plugs in the socket plug set definition"""  
    plug_set_hash: Optional[int] = dataclasses.field(default=None)  
    