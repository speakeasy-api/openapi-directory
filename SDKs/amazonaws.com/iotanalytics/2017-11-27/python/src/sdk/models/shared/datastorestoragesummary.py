import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customermanageddatastores3storagesummary as shared_customermanageddatastores3storagesummary
from ..shared import datastoreiotsitewisemultilayerstoragesummary as shared_datastoreiotsitewisemultilayerstoragesummary


@dataclass_json
@dataclasses.dataclass
class DatastoreStorageSummary:
    r"""DatastoreStorageSummary
    Contains information about your data store.
    """
    
    customer_managed_s3: Optional[shared_customermanageddatastores3storagesummary.CustomerManagedDatastoreS3StorageSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3') }})
    iot_site_wise_multi_layer_storage: Optional[shared_datastoreiotsitewisemultilayerstoragesummary.DatastoreIotSiteWiseMultiLayerStorageSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotSiteWiseMultiLayerStorage') }})
    service_managed_s3: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceManagedS3') }})
    
