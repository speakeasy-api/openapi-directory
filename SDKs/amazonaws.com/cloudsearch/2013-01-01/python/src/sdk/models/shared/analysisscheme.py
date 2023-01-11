import dataclasses
from typing import Optional
from enum import Enum
from ..shared import analysisoptions as shared_analysisoptions
from ..shared import analysisschemelanguage_enum as shared_analysisschemelanguage_enum


@dataclasses.dataclass
class AnalysisScheme:
    r"""AnalysisScheme
    Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.
    """
    
    analysis_scheme_language: shared_analysisschemelanguage_enum.AnalysisSchemeLanguageEnum = dataclasses.field()
    analysis_scheme_name: str = dataclasses.field()
    analysis_options: Optional[shared_analysisoptions.AnalysisOptions] = dataclasses.field(default=None)
    
