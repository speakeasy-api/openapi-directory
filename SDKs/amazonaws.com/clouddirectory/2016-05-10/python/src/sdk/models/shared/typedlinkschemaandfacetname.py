import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TypedLinkSchemaAndFacetName:
    r"""TypedLinkSchemaAndFacetName
    Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
    """
    
    schema_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaArn') }})
    typed_link_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkName') }})
    
