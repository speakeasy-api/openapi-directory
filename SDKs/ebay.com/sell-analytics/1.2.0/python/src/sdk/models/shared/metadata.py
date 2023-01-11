import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metadataheader as shared_metadataheader
from ..shared import metadatarecord as shared_metadatarecord


@dataclass_json
@dataclasses.dataclass
class Metadata:
    r"""Metadata
    Type the defines the metadata information of the report. This includes the headers and the individual metadata records.
    """
    
    metadata_header: Optional[shared_metadataheader.MetadataHeader] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataHeader') }})
    metadata_records: Optional[list[shared_metadatarecord.MetadataRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataRecords') }})
    
