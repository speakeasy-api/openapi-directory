import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import contenttypeprofileconfig as shared_contenttypeprofileconfig
from ..shared import queryargprofileconfig as shared_queryargprofileconfig


@dataclasses.dataclass
class FieldLevelEncryptionSummaryList:
    r"""FieldLevelEncryptionSummaryList
    A summary of a field-level encryption item.
    """
    
    id: str = dataclasses.field()
    last_modified_time: datetime = dataclasses.field()
    comment: Optional[str] = dataclasses.field(default=None)
    content_type_profile_config: Optional[shared_contenttypeprofileconfig.ContentTypeProfileConfig] = dataclasses.field(default=None)
    query_arg_profile_config: Optional[shared_queryargprofileconfig.QueryArgProfileConfig] = dataclasses.field(default=None)
    
