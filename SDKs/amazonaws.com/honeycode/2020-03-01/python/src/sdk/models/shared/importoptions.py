import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import delimitedtextimportoptions as shared_delimitedtextimportoptions
from ..shared import destinationoptions as shared_destinationoptions


@dataclass_json
@dataclasses.dataclass
class ImportOptions:
    r"""ImportOptions
    An object that contains the options specified by the sumitter of the import request.
    """
    
    delimited_text_options: Optional[shared_delimitedtextimportoptions.DelimitedTextImportOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delimitedTextOptions') }})
    destination_options: Optional[shared_destinationoptions.DestinationOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationOptions') }})
    
