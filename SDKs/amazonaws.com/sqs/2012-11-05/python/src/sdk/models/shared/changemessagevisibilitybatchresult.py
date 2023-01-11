import dataclasses
from ..shared import batchresulterrorentrylist as shared_batchresulterrorentrylist
from ..shared import changemessagevisibilitybatchresultentrylist as shared_changemessagevisibilitybatchresultentrylist


@dataclasses.dataclass
class ChangeMessageVisibilityBatchResult:
    r"""ChangeMessageVisibilityBatchResult
    For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
    """
    
    failed: list[shared_batchresulterrorentrylist.BatchResultErrorEntryList] = dataclasses.field()
    successful: list[shared_changemessagevisibilitybatchresultentrylist.ChangeMessageVisibilityBatchResultEntryList] = dataclasses.field()
    
