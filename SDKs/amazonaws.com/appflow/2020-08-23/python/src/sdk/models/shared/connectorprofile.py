import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectionmode_enum as shared_connectionmode_enum
from ..shared import connectorprofileproperties as shared_connectorprofileproperties
from ..shared import connectortype_enum as shared_connectortype_enum
from ..shared import privateconnectionprovisioningstate as shared_privateconnectionprovisioningstate


@dataclass_json
@dataclasses.dataclass
class ConnectorProfile:
    r"""ConnectorProfile
     Describes an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. To keep the API intuitive and extensible, the fields that are common to all types of connector profiles are explicitly specified at the top level. The rest of the connector-specific properties are available via the <code>connectorProfileProperties</code> field. 
    """
    
    connection_mode: Optional[shared_connectionmode_enum.ConnectionModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionMode') }})
    connector_profile_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileArn') }})
    connector_profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileName') }})
    connector_profile_properties: Optional[shared_connectorprofileproperties.ConnectorProfileProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorProfileProperties') }})
    connector_type: Optional[shared_connectortype_enum.ConnectorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorType') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credentials_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialsArn') }})
    last_updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    private_connection_provisioning_state: Optional[shared_privateconnectionprovisioningstate.PrivateConnectionProvisioningState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateConnectionProvisioningState') }})
    
