import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analyticsmetadatatype as shared_analyticsmetadatatype
from ..shared import authflowtype_enum as shared_authflowtype_enum
from ..shared import contextdatatype as shared_contextdatatype


@dataclass_json
@dataclasses.dataclass
class AdminInitiateAuthRequest:
    r"""AdminInitiateAuthRequest
    Initiates the authorization request, as an administrator.
    """
    
    auth_flow: shared_authflowtype_enum.AuthFlowTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthFlow') }})
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    analytics_metadata: Optional[shared_analyticsmetadatatype.AnalyticsMetadataType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnalyticsMetadata') }})
    auth_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthParameters') }})
    client_metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientMetadata') }})
    context_data: Optional[shared_contextdatatype.ContextDataType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContextData') }})
    
