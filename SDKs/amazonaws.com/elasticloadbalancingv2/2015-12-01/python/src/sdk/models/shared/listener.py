import dataclasses
from typing import Optional
from enum import Enum
from ..shared import certificate as shared_certificate
from ..shared import action as shared_action
from ..shared import protocolenum_enum as shared_protocolenum_enum


@dataclasses.dataclass
class Listener:
    r"""Listener
    Information about a listener.
    """
    
    alpn_policy: Optional[list[str]] = dataclasses.field(default=None)
    certificates: Optional[list[shared_certificate.Certificate]] = dataclasses.field(default=None)
    default_actions: Optional[list[shared_action.Action]] = dataclasses.field(default=None)
    listener_arn: Optional[str] = dataclasses.field(default=None)
    load_balancer_arn: Optional[str] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    protocol: Optional[shared_protocolenum_enum.ProtocolEnumEnum] = dataclasses.field(default=None)
    ssl_policy: Optional[str] = dataclasses.field(default=None)
    
