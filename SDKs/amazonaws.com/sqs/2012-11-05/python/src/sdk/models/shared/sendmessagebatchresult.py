import dataclasses
from ..shared import batchresulterrorentrylist as shared_batchresulterrorentrylist
from ..shared import sendmessagebatchresultentrylist as shared_sendmessagebatchresultentrylist


@dataclasses.dataclass
class SendMessageBatchResult:
    r"""SendMessageBatchResult
    For each message in the batch, the response contains a <code> <a>SendMessageBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
    """
    
    failed: list[shared_batchresulterrorentrylist.BatchResultErrorEntryList] = dataclasses.field()
    successful: list[shared_sendmessagebatchresultentrylist.SendMessageBatchResultEntryList] = dataclasses.field()
    
