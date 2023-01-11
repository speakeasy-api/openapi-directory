import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import partnerintegrationstatus_enum as shared_partnerintegrationstatus_enum


@dataclasses.dataclass
class PartnerIntegrationInfoList:
    r"""PartnerIntegrationInfoList
    Describes a partner integration.
    """
    
    created_at: Optional[datetime] = dataclasses.field(default=None)
    database_name: Optional[str] = dataclasses.field(default=None)
    partner_name: Optional[str] = dataclasses.field(default=None)
    status: Optional[shared_partnerintegrationstatus_enum.PartnerIntegrationStatusEnum] = dataclasses.field(default=None)
    status_message: Optional[str] = dataclasses.field(default=None)
    updated_at: Optional[datetime] = dataclasses.field(default=None)
    
