import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serversideencryption as shared_serversideencryption
from ..shared import storageclass_enum as shared_storageclass_enum
from ..shared import keyvaluepair as shared_keyvaluepair


@dataclass_json
@dataclasses.dataclass
class S3Object:
    r"""S3Object
    Provides information about the S3 object that a finding applies to.
    """
    
    bucket_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketArn') }})
    e_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eTag') }})
    extension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    last_modified: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    public_access: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicAccess') }})
    server_side_encryption: Optional[shared_serversideencryption.ServerSideEncryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverSideEncryption') }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    storage_class: Optional[shared_storageclass_enum.StorageClassEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageClass') }})
    tags: Optional[list[shared_keyvaluepair.KeyValuePair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    version_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionId') }})
    
