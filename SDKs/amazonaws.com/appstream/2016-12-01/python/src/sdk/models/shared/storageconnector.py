import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storageconnectortype_enum as shared_storageconnectortype_enum


@dataclass_json
@dataclasses.dataclass
class StorageConnector:
    r"""StorageConnector
    Describes a connector that enables persistent storage for users.
    """
    
    connector_type: shared_storageconnectortype_enum.StorageConnectorTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectorType') }})
    domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domains') }})
    resource_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdentifier') }})
    
