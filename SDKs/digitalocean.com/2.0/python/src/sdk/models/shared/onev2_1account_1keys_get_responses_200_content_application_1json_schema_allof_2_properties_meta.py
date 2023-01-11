import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta:
    r"""Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
