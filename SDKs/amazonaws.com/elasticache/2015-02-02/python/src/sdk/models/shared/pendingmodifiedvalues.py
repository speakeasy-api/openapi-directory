import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import authtokenupdatestatus_enum as shared_authtokenupdatestatus_enum
from ..shared import pendinglogdeliveryconfiguration as shared_pendinglogdeliveryconfiguration


@dataclasses.dataclass
class PendingModifiedValues:
    r"""PendingModifiedValues
    A group of settings that are applied to the cluster in the future, or that are currently being applied.
    """
    
    auth_token_status: Optional[shared_authtokenupdatestatus_enum.AuthTokenUpdateStatusEnum] = dataclasses.field(default=None)
    cache_node_ids_to_remove: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    cache_node_type: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    log_delivery_configurations: Optional[list[shared_pendinglogdeliveryconfiguration.PendingLogDeliveryConfiguration]] = dataclasses.field(default=None)
    num_cache_nodes: Optional[int] = dataclasses.field(default=None)
    
