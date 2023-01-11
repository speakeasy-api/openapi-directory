import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagsmodel as shared_tagsmodel


@dataclass_json
@dataclasses.dataclass
class ListTagsForResourceResponse:
    tags_model: shared_tagsmodel.TagsModel = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagsModel') }})
    
