import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customermanageds3storage as shared_customermanageds3storage


@dataclass_json
@dataclasses.dataclass
class MultiLayerStorage:
    r"""MultiLayerStorage
    Contains information about the storage destination.
    """
    
    customer_managed_s3_storage: shared_customermanageds3storage.CustomerManagedS3Storage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3Storage') }})
    
