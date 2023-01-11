import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizerconfig as shared_authorizerconfig
from ..shared import domainconfigurationstatus_enum as shared_domainconfigurationstatus_enum
from ..shared import domaintype_enum as shared_domaintype_enum
from ..shared import servercertificatesummary as shared_servercertificatesummary
from ..shared import servicetype_enum as shared_servicetype_enum


@dataclass_json
@dataclasses.dataclass
class DescribeDomainConfigurationResponse:
    authorizer_config: Optional[shared_authorizerconfig.AuthorizerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerConfig') }})
    domain_configuration_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainConfigurationArn') }})
    domain_configuration_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainConfigurationName') }})
    domain_configuration_status: Optional[shared_domainconfigurationstatus_enum.DomainConfigurationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainConfigurationStatus') }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    domain_type: Optional[shared_domaintype_enum.DomainTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainType') }})
    last_status_change_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStatusChangeDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    server_certificates: Optional[list[shared_servercertificatesummary.ServerCertificateSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificates') }})
    service_type: Optional[shared_servicetype_enum.ServiceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceType') }})
    
