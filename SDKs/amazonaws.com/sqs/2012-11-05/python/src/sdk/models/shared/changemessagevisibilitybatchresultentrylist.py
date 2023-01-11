import dataclasses



@dataclasses.dataclass
class ChangeMessageVisibilityBatchResultEntryList:
    r"""ChangeMessageVisibilityBatchResultEntryList
    Encloses the <code>Id</code> of an entry in <code> <a>ChangeMessageVisibilityBatch</a>.</code> 
    """
    
    id: str = dataclasses.field()
    
