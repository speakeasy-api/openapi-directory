import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import campaigndaterangekpiresponse as shared_campaigndaterangekpiresponse


@dataclass_json
@dataclasses.dataclass
class GetCampaignDateRangeKpiResponse:
    campaign_date_range_kpi_response: shared_campaigndaterangekpiresponse.CampaignDateRangeKpiResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignDateRangeKpiResponse') }})
    
