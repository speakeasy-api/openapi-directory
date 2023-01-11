import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import csvclassifier as shared_csvclassifier
from ..shared import grokclassifier as shared_grokclassifier
from ..shared import jsonclassifier as shared_jsonclassifier
from ..shared import xmlclassifier as shared_xmlclassifier


@dataclass_json
@dataclasses.dataclass
class Classifier:
    r"""Classifier
    <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p>
    """
    
    csv_classifier: Optional[shared_csvclassifier.CsvClassifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CsvClassifier') }})
    grok_classifier: Optional[shared_grokclassifier.GrokClassifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrokClassifier') }})
    json_classifier: Optional[shared_jsonclassifier.JSONClassifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JsonClassifier') }})
    xml_classifier: Optional[shared_xmlclassifier.XMLClassifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XMLClassifier') }})
    
