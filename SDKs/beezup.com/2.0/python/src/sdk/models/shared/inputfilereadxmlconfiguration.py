import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InputFileReadXMLConfiguration:
    r"""InputFileReadXMLConfiguration
    The XML file description
    """
    
    flatten_xml_child_elements: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('flattenXmlChildElements') }})
    use_xml_attributes: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('useXmlAttributes') }})
    
