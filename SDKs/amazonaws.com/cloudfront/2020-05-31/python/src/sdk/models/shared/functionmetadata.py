import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import functionstage_enum as shared_functionstage_enum


@dataclasses.dataclass
class FunctionMetadata:
    r"""FunctionMetadata
    Contains metadata about a CloudFront function.
    """
    
    function_arn: str = dataclasses.field()
    last_modified_time: datetime = dataclasses.field()
    created_time: Optional[datetime] = dataclasses.field(default=None)
    stage: Optional[shared_functionstage_enum.FunctionStageEnum] = dataclasses.field(default=None)
    
