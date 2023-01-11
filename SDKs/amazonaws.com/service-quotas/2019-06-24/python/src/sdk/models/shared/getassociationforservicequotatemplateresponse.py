import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicequotatemplateassociationstatus_enum as shared_servicequotatemplateassociationstatus_enum


@dataclass_json
@dataclasses.dataclass
class GetAssociationForServiceQuotaTemplateResponse:
    service_quota_template_association_status: Optional[shared_servicequotatemplateassociationstatus_enum.ServiceQuotaTemplateAssociationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceQuotaTemplateAssociationStatus') }})
    
