import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status_enum as shared_status_enum
from ..shared import backuppolicydescription as shared_backuppolicydescription


@dataclasses.dataclass
class PutBackupPolicyPathParams:
    file_system_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FileSystemId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutBackupPolicyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutBackupPolicyRequestBodyBackupPolicy:
    r"""PutBackupPolicyRequestBodyBackupPolicy
    The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href=\"https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups\">Automatic backups</a>.
    """
    
    status: Optional[shared_status_enum.StatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    

@dataclass_json
@dataclasses.dataclass
class PutBackupPolicyRequestBody:
    backup_policy: PutBackupPolicyRequestBodyBackupPolicy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupPolicy') }})
    

@dataclasses.dataclass
class PutBackupPolicyRequest:
    headers: PutBackupPolicyHeaders = dataclasses.field()
    path_params: PutBackupPolicyPathParams = dataclasses.field()
    request: PutBackupPolicyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutBackupPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    backup_policy_description: Optional[shared_backuppolicydescription.BackupPolicyDescription] = dataclasses.field(default=None)
    bad_request: Optional[Any] = dataclasses.field(default=None)
    file_system_not_found: Optional[Any] = dataclasses.field(default=None)
    incorrect_file_system_life_cycle_state: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
