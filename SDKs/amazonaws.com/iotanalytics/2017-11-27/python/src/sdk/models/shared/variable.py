import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasetcontentversionvalue as shared_datasetcontentversionvalue
from ..shared import outputfileurivalue as shared_outputfileurivalue


@dataclass_json
@dataclasses.dataclass
class Variable:
    r"""Variable
    An instance of a variable to be passed to the <code>containerAction</code> execution. Each variable must have a name and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    dataset_content_version_value: Optional[shared_datasetcontentversionvalue.DatasetContentVersionValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetContentVersionValue') }})
    double_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    output_file_uri_value: Optional[shared_outputfileurivalue.OutputFileURIValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputFileUriValue') }})
    string_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
