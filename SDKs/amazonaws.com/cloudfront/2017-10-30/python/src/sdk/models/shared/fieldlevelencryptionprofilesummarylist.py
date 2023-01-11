import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import encryptionentities as shared_encryptionentities


@dataclasses.dataclass
class FieldLevelEncryptionProfileSummaryList:
    r"""FieldLevelEncryptionProfileSummaryList
    The field-level encryption profile summary.
    """
    
    encryption_entities: shared_encryptionentities.EncryptionEntities = dataclasses.field()
    id: str = dataclasses.field()
    last_modified_time: datetime = dataclasses.field()
    name: str = dataclasses.field()
    comment: Optional[str] = dataclasses.field(default=None)
    
