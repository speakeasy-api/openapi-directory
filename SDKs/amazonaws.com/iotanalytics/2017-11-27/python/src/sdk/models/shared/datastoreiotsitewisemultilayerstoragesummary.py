import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iotsitewisecustomermanageddatastores3storagesummary as shared_iotsitewisecustomermanageddatastores3storagesummary


@dataclass_json
@dataclasses.dataclass
class DatastoreIotSiteWiseMultiLayerStorageSummary:
    r"""DatastoreIotSiteWiseMultiLayerStorageSummary
     Contains information about the data store that you manage, which stores data used by IoT SiteWise. 
    """
    
    customer_managed_s3_storage: Optional[shared_iotsitewisecustomermanageddatastores3storagesummary.IotSiteWiseCustomerManagedDatastoreS3StorageSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3Storage') }})
    
