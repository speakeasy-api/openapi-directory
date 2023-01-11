import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customplugincontenttype_enum as shared_customplugincontenttype_enum
from ..shared import custompluginfiledescription as shared_custompluginfiledescription
from ..shared import custompluginlocationdescription as shared_custompluginlocationdescription


@dataclass_json
@dataclasses.dataclass
class CustomPluginRevisionSummary:
    r"""CustomPluginRevisionSummary
    Details about the revision of a custom plugin.
    """
    
    content_type: Optional[shared_customplugincontenttype_enum.CustomPluginContentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    file_description: Optional[shared_custompluginfiledescription.CustomPluginFileDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileDescription') }})
    location: Optional[shared_custompluginlocationdescription.CustomPluginLocationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    revision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
