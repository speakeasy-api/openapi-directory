import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actioncode_enum as shared_actioncode_enum
from ..shared import inventoryretrievaljobdescription as shared_inventoryretrievaljobdescription
from ..shared import outputlocation as shared_outputlocation
from ..shared import selectparameters as shared_selectparameters
from ..shared import statuscode_enum as shared_statuscode_enum


@dataclass_json
@dataclasses.dataclass
class GlacierJobDescription:
    r"""GlacierJobDescription
    Contains the description of an Amazon S3 Glacier job.
    """
    
    action: Optional[shared_actioncode_enum.ActionCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    archive_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArchiveId') }})
    archive_sha256_tree_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArchiveSHA256TreeHash') }})
    archive_size_in_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArchiveSizeInBytes') }})
    completed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Completed') }})
    completion_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionDate') }})
    creation_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    inventory_retrieval_parameters: Optional[shared_inventoryretrievaljobdescription.InventoryRetrievalJobDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InventoryRetrievalParameters') }})
    inventory_size_in_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InventorySizeInBytes') }})
    job_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobDescription') }})
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    job_output_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobOutputPath') }})
    output_location: Optional[shared_outputlocation.OutputLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputLocation') }})
    retrieval_byte_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetrievalByteRange') }})
    sha256_tree_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SHA256TreeHash') }})
    sns_topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SNSTopic') }})
    select_parameters: Optional[shared_selectparameters.SelectParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectParameters') }})
    status_code: Optional[shared_statuscode_enum.StatusCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusCode') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    tier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    vault_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VaultARN') }})
    
