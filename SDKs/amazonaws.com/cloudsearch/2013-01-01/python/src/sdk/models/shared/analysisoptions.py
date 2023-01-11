import dataclasses
from typing import Optional
from enum import Enum
from ..shared import algorithmicstemming_enum as shared_algorithmicstemming_enum


@dataclasses.dataclass
class AnalysisOptions:
    r"""AnalysisOptions
    Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.
    """
    
    algorithmic_stemming: Optional[shared_algorithmicstemming_enum.AlgorithmicStemmingEnum] = dataclasses.field(default=None)
    japanese_tokenization_dictionary: Optional[str] = dataclasses.field(default=None)
    stemming_dictionary: Optional[str] = dataclasses.field(default=None)
    stopwords: Optional[str] = dataclasses.field(default=None)
    synonyms: Optional[str] = dataclasses.field(default=None)
    
