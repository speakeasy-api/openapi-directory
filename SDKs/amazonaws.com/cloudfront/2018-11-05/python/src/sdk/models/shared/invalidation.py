import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import invalidationbatch as shared_invalidationbatch


@dataclasses.dataclass
class Invalidation:
    r"""Invalidation
    An invalidation. 
    """
    
    create_time: datetime = dataclasses.field()
    id: str = dataclasses.field()
    invalidation_batch: shared_invalidationbatch.InvalidationBatch = dataclasses.field()
    status: str = dataclasses.field()
    
