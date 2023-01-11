import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateDomainNameResponseMutualTLSAuthentication:
    r"""UpdateDomainNameResponseMutualTLSAuthentication
    The mutual TLS authentication configuration for a custom domain name.
    """
    
    truststore_uri: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TruststoreUri') }})
    truststore_version: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TruststoreVersion') }})
    truststore_warnings: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TruststoreWarnings') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDomainNameResponse:
    api_mapping_selection_expression: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiMappingSelectionExpression') }})
    domain_name: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    domain_name_configurations: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainNameConfigurations') }})
    mutual_tls_authentication: Optional[UpdateDomainNameResponseMutualTLSAuthentication] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MutualTlsAuthentication') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
