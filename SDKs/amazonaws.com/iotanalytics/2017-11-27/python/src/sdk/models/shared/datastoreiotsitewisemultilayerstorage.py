import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iotsitewisecustomermanageddatastores3storage as shared_iotsitewisecustomermanageddatastores3storage


@dataclass_json
@dataclasses.dataclass
class DatastoreIotSiteWiseMultiLayerStorage:
    r"""DatastoreIotSiteWiseMultiLayerStorage
     Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created. 
    """
    
    customer_managed_s3_storage: shared_iotsitewisecustomermanageddatastores3storage.IotSiteWiseCustomerManagedDatastoreS3Storage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3Storage') }})
    
