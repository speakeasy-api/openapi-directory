import dataclasses
from typing import Optional
from ..shared import conflictingaliaseslist as shared_conflictingaliaseslist


@dataclasses.dataclass
class ListConflictingAliasesResult:
    conflicting_aliases_list: Optional[shared_conflictingaliaseslist.ConflictingAliasesList] = dataclasses.field(default=None)
    
