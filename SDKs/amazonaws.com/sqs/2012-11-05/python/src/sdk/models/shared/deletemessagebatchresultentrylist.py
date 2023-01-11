import dataclasses



@dataclasses.dataclass
class DeleteMessageBatchResultEntryList:
    r"""DeleteMessageBatchResultEntryList
    Encloses the <code>Id</code> of an entry in <code> <a>DeleteMessageBatch</a>.</code> 
    """
    
    id: str = dataclasses.field()
    
