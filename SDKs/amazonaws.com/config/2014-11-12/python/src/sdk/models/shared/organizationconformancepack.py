import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conformancepackinputparameter as shared_conformancepackinputparameter


@dataclass_json
@dataclasses.dataclass
class OrganizationConformancePack:
    r"""OrganizationConformancePack
    An organization conformance pack that has information about conformance packs that Config creates in member accounts. 
    """
    
    last_update_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    organization_conformance_pack_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConformancePackArn') }})
    organization_conformance_pack_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConformancePackName') }})
    conformance_pack_input_parameters: Optional[list[shared_conformancepackinputparameter.ConformancePackInputParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackInputParameters') }})
    delivery_s3_bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryS3Bucket') }})
    delivery_s3_key_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryS3KeyPrefix') }})
    excluded_accounts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludedAccounts') }})
    
