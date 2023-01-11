import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IotSiteWiseCustomerManagedDatastoreS3StorageSummary:
    r"""IotSiteWiseCustomerManagedDatastoreS3StorageSummary
     Contains information about the data store that you manage, which stores data used by IoT SiteWise. 
    """
    
    bucket: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket') }})
    key_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPrefix') }})
    
