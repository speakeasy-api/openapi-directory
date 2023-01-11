import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import definitiondocument as shared_definitiondocument


@dataclass_json
@dataclasses.dataclass
class UploadEntityDefinitionsRequest:
    deprecate_existing_entities: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecateExistingEntities') }})
    document: Optional[shared_definitiondocument.DefinitionDocument] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    sync_with_public_namespace: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncWithPublicNamespace') }})
    
