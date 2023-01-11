import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import indtaxdocuments as shared_indtaxdocuments


@dataclass_json
@dataclasses.dataclass
class TaxDocuments:
    r"""TaxDocuments
    The tax documents required in your AWS Region.
    """
    
    ind: Optional[shared_indtaxdocuments.IndTaxDocuments] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IND') }})
    
