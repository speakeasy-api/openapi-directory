import dataclasses
from typing import Optional
from enum import Enum
from ..shared import suggesterfuzzymatching_enum as shared_suggesterfuzzymatching_enum


@dataclasses.dataclass
class DocumentSuggesterOptions:
    r"""DocumentSuggesterOptions
    Options for a search suggester.
    """
    
    source_field: str = dataclasses.field()
    fuzzy_matching: Optional[shared_suggesterfuzzymatching_enum.SuggesterFuzzyMatchingEnum] = dataclasses.field(default=None)
    sort_expression: Optional[str] = dataclasses.field(default=None)
    
