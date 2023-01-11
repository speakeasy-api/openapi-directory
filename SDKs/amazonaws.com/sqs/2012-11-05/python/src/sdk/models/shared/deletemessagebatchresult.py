import dataclasses
from ..shared import batchresulterrorentrylist as shared_batchresulterrorentrylist
from ..shared import deletemessagebatchresultentrylist as shared_deletemessagebatchresultentrylist


@dataclasses.dataclass
class DeleteMessageBatchResult:
    r"""DeleteMessageBatchResult
    For each message in the batch, the response contains a <code> <a>DeleteMessageBatchResultEntry</a> </code> tag if the message is deleted or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message can't be deleted.
    """
    
    failed: list[shared_batchresulterrorentrylist.BatchResultErrorEntryList] = dataclasses.field()
    successful: list[shared_deletemessagebatchresultentrylist.DeleteMessageBatchResultEntryList] = dataclasses.field()
    
