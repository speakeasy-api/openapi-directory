import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowsunencryptedobjectuploads_enum as shared_allowsunencryptedobjectuploads_enum
from ..shared import serversideencryption as shared_serversideencryption
from ..shared import s3bucketowner as shared_s3bucketowner
from ..shared import bucketpublicaccess as shared_bucketpublicaccess
from ..shared import keyvaluepair as shared_keyvaluepair


@dataclass_json
@dataclasses.dataclass
class S3Bucket:
    r"""S3Bucket
    Provides information about the S3 bucket that a finding applies to.
    """
    
    allows_unencrypted_object_uploads: Optional[shared_allowsunencryptedobjectuploads_enum.AllowsUnencryptedObjectUploadsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowsUnencryptedObjectUploads') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_server_side_encryption: Optional[shared_serversideencryption.ServerSideEncryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultServerSideEncryption') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[shared_s3bucketowner.S3BucketOwner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    public_access: Optional[shared_bucketpublicaccess.BucketPublicAccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicAccess') }})
    tags: Optional[list[shared_keyvaluepair.KeyValuePair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
