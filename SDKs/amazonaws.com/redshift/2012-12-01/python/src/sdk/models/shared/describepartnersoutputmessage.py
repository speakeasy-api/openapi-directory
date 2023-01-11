import dataclasses
from typing import Optional
from ..shared import partnerintegrationinfolist as shared_partnerintegrationinfolist


@dataclasses.dataclass
class DescribePartnersOutputMessage:
    partner_integration_info_list: Optional[list[shared_partnerintegrationinfolist.PartnerIntegrationInfoList]] = dataclasses.field(default=None)
    
