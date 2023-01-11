import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accounttakeoverriskconfigurationtype as shared_accounttakeoverriskconfigurationtype
from ..shared import compromisedcredentialsriskconfigurationtype as shared_compromisedcredentialsriskconfigurationtype
from ..shared import riskexceptionconfigurationtype as shared_riskexceptionconfigurationtype


@dataclass_json
@dataclasses.dataclass
class SetRiskConfigurationRequest:
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    account_takeover_risk_configuration: Optional[shared_accounttakeoverriskconfigurationtype.AccountTakeoverRiskConfigurationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountTakeoverRiskConfiguration') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    compromised_credentials_risk_configuration: Optional[shared_compromisedcredentialsriskconfigurationtype.CompromisedCredentialsRiskConfigurationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompromisedCredentialsRiskConfiguration') }})
    risk_exception_configuration: Optional[shared_riskexceptionconfigurationtype.RiskExceptionConfigurationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RiskExceptionConfiguration') }})
    
