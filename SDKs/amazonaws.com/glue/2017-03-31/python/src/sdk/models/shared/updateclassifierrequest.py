import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatecsvclassifierrequest as shared_updatecsvclassifierrequest
from ..shared import updategrokclassifierrequest as shared_updategrokclassifierrequest
from ..shared import updatejsonclassifierrequest as shared_updatejsonclassifierrequest
from ..shared import updatexmlclassifierrequest as shared_updatexmlclassifierrequest


@dataclass_json
@dataclasses.dataclass
class UpdateClassifierRequest:
    csv_classifier: Optional[shared_updatecsvclassifierrequest.UpdateCsvClassifierRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CsvClassifier') }})
    grok_classifier: Optional[shared_updategrokclassifierrequest.UpdateGrokClassifierRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrokClassifier') }})
    json_classifier: Optional[shared_updatejsonclassifierrequest.UpdateJSONClassifierRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JsonClassifier') }})
    xml_classifier: Optional[shared_updatexmlclassifierrequest.UpdateXMLClassifierRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XMLClassifier') }})
    
