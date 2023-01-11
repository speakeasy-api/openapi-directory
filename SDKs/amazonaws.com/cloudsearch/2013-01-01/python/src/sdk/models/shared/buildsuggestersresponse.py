import dataclasses
from typing import Optional


@dataclasses.dataclass
class BuildSuggestersResponse:
    r"""BuildSuggestersResponse
    The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions.
    """
    
    field_names: Optional[list[str]] = dataclasses.field(default=None)
    
