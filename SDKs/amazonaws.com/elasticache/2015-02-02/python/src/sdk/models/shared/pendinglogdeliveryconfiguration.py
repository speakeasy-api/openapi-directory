import dataclasses
from typing import Optional
from enum import Enum
from ..shared import destinationdetails as shared_destinationdetails
from ..shared import destinationtype_enum as shared_destinationtype_enum
from ..shared import logformat_enum as shared_logformat_enum
from ..shared import logtype_enum as shared_logtype_enum


@dataclasses.dataclass
class PendingLogDeliveryConfiguration:
    r"""PendingLogDeliveryConfiguration
    The log delivery configurations being modified 
    """
    
    destination_details: Optional[shared_destinationdetails.DestinationDetails] = dataclasses.field(default=None)
    destination_type: Optional[shared_destinationtype_enum.DestinationTypeEnum] = dataclasses.field(default=None)
    log_format: Optional[shared_logformat_enum.LogFormatEnum] = dataclasses.field(default=None)
    log_type: Optional[shared_logtype_enum.LogTypeEnum] = dataclasses.field(default=None)
    
