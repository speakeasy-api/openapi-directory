import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneme_1vendors_1percent_7bvendorpercent_7d_delete_parameters_0_schema_enum as shared_oneme_1vendors_1percent_7bvendorpercent_7d_delete_parameters_0_schema_enum

class GetHealthVendors200ApplicationJSONStatusEnum(str, Enum):
    READY = "READY"
    ELEVATED_ERROR_RATE = "ELEVATED_ERROR_RATE"
    OUTAGE = "OUTAGE"


@dataclass_json
@dataclasses.dataclass
class GetHealthVendors200ApplicationJSON:
    r"""GetHealthVendors200ApplicationJSON
    Vendor status and metadata
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    status: Optional[GetHealthVendors200ApplicationJSONStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    vendor: Optional[shared_oneme_1vendors_1percent_7bvendorpercent_7d_delete_parameters_0_schema_enum.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor') }})
    

@dataclasses.dataclass
class GetHealthVendorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_health_vendors_200_application_json_objects: Optional[list[GetHealthVendors200ApplicationJSON]] = dataclasses.field(default=None)
    
