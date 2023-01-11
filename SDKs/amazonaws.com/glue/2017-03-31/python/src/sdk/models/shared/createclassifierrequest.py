import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createcsvclassifierrequest as shared_createcsvclassifierrequest
from ..shared import creategrokclassifierrequest as shared_creategrokclassifierrequest
from ..shared import createjsonclassifierrequest as shared_createjsonclassifierrequest
from ..shared import createxmlclassifierrequest as shared_createxmlclassifierrequest


@dataclass_json
@dataclasses.dataclass
class CreateClassifierRequest:
    csv_classifier: Optional[shared_createcsvclassifierrequest.CreateCsvClassifierRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CsvClassifier') }})
    grok_classifier: Optional[shared_creategrokclassifierrequest.CreateGrokClassifierRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrokClassifier') }})
    json_classifier: Optional[shared_createjsonclassifierrequest.CreateJSONClassifierRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JsonClassifier') }})
    xml_classifier: Optional[shared_createxmlclassifierrequest.CreateXMLClassifierRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XMLClassifier') }})
    
