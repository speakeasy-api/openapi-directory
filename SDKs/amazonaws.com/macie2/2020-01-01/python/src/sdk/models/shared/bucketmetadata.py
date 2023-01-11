import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowsunencryptedobjectuploads_enum as shared_allowsunencryptedobjectuploads_enum
from ..shared import jobdetails as shared_jobdetails
from ..shared import objectcountbyencryptiontype as shared_objectcountbyencryptiontype
from ..shared import bucketpublicaccess as shared_bucketpublicaccess
from ..shared import replicationdetails as shared_replicationdetails
from ..shared import bucketserversideencryption as shared_bucketserversideencryption
from ..shared import sharedaccess_enum as shared_sharedaccess_enum
from ..shared import keyvaluepair as shared_keyvaluepair
from ..shared import objectlevelstatistics as shared_objectlevelstatistics


@dataclass_json
@dataclasses.dataclass
class BucketMetadata:
    r"""BucketMetadata
    Provides information about an S3 bucket that Amazon Macie monitors and analyzes.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    allows_unencrypted_object_uploads: Optional[shared_allowsunencryptedobjectuploads_enum.AllowsUnencryptedObjectUploadsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowsUnencryptedObjectUploads') }})
    bucket_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketArn') }})
    bucket_created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    bucket_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    classifiable_object_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifiableObjectCount') }})
    classifiable_size_in_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifiableSizeInBytes') }})
    job_details: Optional[shared_jobdetails.JobDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDetails') }})
    last_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    object_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectCount') }})
    object_count_by_encryption_type: Optional[shared_objectcountbyencryptiontype.ObjectCountByEncryptionType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectCountByEncryptionType') }})
    public_access: Optional[shared_bucketpublicaccess.BucketPublicAccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicAccess') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    replication_details: Optional[shared_replicationdetails.ReplicationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationDetails') }})
    server_side_encryption: Optional[shared_bucketserversideencryption.BucketServerSideEncryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverSideEncryption') }})
    shared_access: Optional[shared_sharedaccess_enum.SharedAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedAccess') }})
    size_in_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInBytes') }})
    size_in_bytes_compressed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInBytesCompressed') }})
    tags: Optional[list[shared_keyvaluepair.KeyValuePair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    unclassifiable_object_count: Optional[shared_objectlevelstatistics.ObjectLevelStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unclassifiableObjectCount') }})
    unclassifiable_object_size_in_bytes: Optional[shared_objectlevelstatistics.ObjectLevelStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unclassifiableObjectSizeInBytes') }})
    versioning: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versioning') }})
    
