import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awss3bucketbucketlifecycleconfigurationrulesabortincompletemultipartuploaddetails as shared_awss3bucketbucketlifecycleconfigurationrulesabortincompletemultipartuploaddetails
from ..shared import awss3bucketbucketlifecycleconfigurationrulesfilterdetails as shared_awss3bucketbucketlifecycleconfigurationrulesfilterdetails
from ..shared import awss3bucketbucketlifecycleconfigurationrulesnoncurrentversiontransitionsdetails as shared_awss3bucketbucketlifecycleconfigurationrulesnoncurrentversiontransitionsdetails
from ..shared import awss3bucketbucketlifecycleconfigurationrulestransitionsdetails as shared_awss3bucketbucketlifecycleconfigurationrulestransitionsdetails


@dataclass_json
@dataclasses.dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesDetails:
    r"""AwsS3BucketBucketLifecycleConfigurationRulesDetails
    Configuration for a lifecycle rule.
    """
    
    abort_incomplete_multipart_upload: Optional[shared_awss3bucketbucketlifecycleconfigurationrulesabortincompletemultipartuploaddetails.AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbortIncompleteMultipartUpload') }})
    expiration_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDate') }})
    expiration_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationInDays') }})
    expired_object_delete_marker: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpiredObjectDeleteMarker') }})
    filter: Optional[shared_awss3bucketbucketlifecycleconfigurationrulesfilterdetails.AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ID') }})
    noncurrent_version_expiration_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoncurrentVersionExpirationInDays') }})
    noncurrent_version_transitions: Optional[list[shared_awss3bucketbucketlifecycleconfigurationrulesnoncurrentversiontransitionsdetails.AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoncurrentVersionTransitions') }})
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    transitions: Optional[list[shared_awss3bucketbucketlifecycleconfigurationrulestransitionsdetails.AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transitions') }})
    
