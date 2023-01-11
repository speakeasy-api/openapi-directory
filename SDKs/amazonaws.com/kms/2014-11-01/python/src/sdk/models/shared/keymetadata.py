import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionalgorithmspec_enum as shared_encryptionalgorithmspec_enum
from ..shared import expirationmodeltype_enum as shared_expirationmodeltype_enum
from ..shared import keymanagertype_enum as shared_keymanagertype_enum
from ..shared import keyspec_enum as shared_keyspec_enum
from ..shared import keystate_enum as shared_keystate_enum
from ..shared import keyusagetype_enum as shared_keyusagetype_enum
from ..shared import multiregionconfiguration as shared_multiregionconfiguration
from ..shared import origintype_enum as shared_origintype_enum
from ..shared import signingalgorithmspec_enum as shared_signingalgorithmspec_enum


@dataclass_json
@dataclasses.dataclass
class KeyMetadata:
    r"""KeyMetadata
    <p>Contains metadata about a KMS key.</p> <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p>
    """
    
    key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    aws_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AWSAccountId') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    cloud_hsm_cluster_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudHsmClusterId') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_key_store_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomKeyStoreId') }})
    customer_master_key_spec: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomerMasterKeySpec') }})
    deletion_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletionDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    encryption_algorithms: Optional[list[shared_encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionAlgorithms') }})
    expiration_model: Optional[shared_expirationmodeltype_enum.ExpirationModelTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationModel') }})
    key_manager: Optional[shared_keymanagertype_enum.KeyManagerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyManager') }})
    key_spec: Optional[shared_keyspec_enum.KeySpecEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySpec') }})
    key_state: Optional[shared_keystate_enum.KeyStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyState') }})
    key_usage: Optional[shared_keyusagetype_enum.KeyUsageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyUsage') }})
    multi_region: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiRegion') }})
    multi_region_configuration: Optional[shared_multiregionconfiguration.MultiRegionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiRegionConfiguration') }})
    origin: Optional[shared_origintype_enum.OriginTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Origin') }})
    pending_deletion_window_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingDeletionWindowInDays') }})
    signing_algorithms: Optional[list[shared_signingalgorithmspec_enum.SigningAlgorithmSpecEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAlgorithms') }})
    valid_to: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidTo'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
