import dataclasses
from ..shared import bulkemaildestinationstatus as shared_bulkemaildestinationstatus


@dataclasses.dataclass
class SendBulkTemplatedEmailResponse:
    status: list[shared_bulkemaildestinationstatus.BulkEmailDestinationStatus] = dataclasses.field()
    
