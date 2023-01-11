import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucketcountbyeffectivepermission as shared_bucketcountbyeffectivepermission
from ..shared import bucketcountbyencryptiontype as shared_bucketcountbyencryptiontype
from ..shared import bucketcountpolicyallowsunencryptedobjectuploads as shared_bucketcountpolicyallowsunencryptedobjectuploads
from ..shared import bucketcountbysharedaccesstype as shared_bucketcountbysharedaccesstype
from ..shared import objectlevelstatistics as shared_objectlevelstatistics


@dataclass_json
@dataclasses.dataclass
class GetBucketStatisticsResponse:
    bucket_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCount') }})
    bucket_count_by_effective_permission: Optional[shared_bucketcountbyeffectivepermission.BucketCountByEffectivePermission] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCountByEffectivePermission') }})
    bucket_count_by_encryption_type: Optional[shared_bucketcountbyencryptiontype.BucketCountByEncryptionType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCountByEncryptionType') }})
    bucket_count_by_object_encryption_requirement: Optional[shared_bucketcountpolicyallowsunencryptedobjectuploads.BucketCountPolicyAllowsUnencryptedObjectUploads] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCountByObjectEncryptionRequirement') }})
    bucket_count_by_shared_access_type: Optional[shared_bucketcountbysharedaccesstype.BucketCountBySharedAccessType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCountBySharedAccessType') }})
    classifiable_object_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifiableObjectCount') }})
    classifiable_size_in_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifiableSizeInBytes') }})
    last_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    object_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectCount') }})
    size_in_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInBytes') }})
    size_in_bytes_compressed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInBytesCompressed') }})
    unclassifiable_object_count: Optional[shared_objectlevelstatistics.ObjectLevelStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unclassifiableObjectCount') }})
    unclassifiable_object_size_in_bytes: Optional[shared_objectlevelstatistics.ObjectLevelStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unclassifiableObjectSizeInBytes') }})
    
