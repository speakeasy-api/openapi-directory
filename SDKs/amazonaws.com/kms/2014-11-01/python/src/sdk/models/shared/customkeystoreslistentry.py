import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionerrorcodetype_enum as shared_connectionerrorcodetype_enum
from ..shared import connectionstatetype_enum as shared_connectionstatetype_enum


@dataclass_json
@dataclasses.dataclass
class CustomKeyStoresListEntry:
    r"""CustomKeyStoresListEntry
    Contains information about each custom key store in the custom key store list.
    """
    
    cloud_hsm_cluster_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudHsmClusterId') }})
    connection_error_code: Optional[shared_connectionerrorcodetype_enum.ConnectionErrorCodeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionErrorCode') }})
    connection_state: Optional[shared_connectionstatetype_enum.ConnectionStateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionState') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_key_store_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomKeyStoreId') }})
    custom_key_store_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomKeyStoreName') }})
    trust_anchor_certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustAnchorCertificate') }})
    
