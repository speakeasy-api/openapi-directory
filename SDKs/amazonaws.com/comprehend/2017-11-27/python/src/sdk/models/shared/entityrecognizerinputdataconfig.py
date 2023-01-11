import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entityrecognizerannotations as shared_entityrecognizerannotations
from ..shared import augmentedmanifestslistitem as shared_augmentedmanifestslistitem
from ..shared import entityrecognizerdataformat_enum as shared_entityrecognizerdataformat_enum
from ..shared import entityrecognizerdocuments as shared_entityrecognizerdocuments
from ..shared import entityrecognizerentitylist as shared_entityrecognizerentitylist
from ..shared import entitytypeslistitem as shared_entitytypeslistitem


@dataclass_json
@dataclasses.dataclass
class EntityRecognizerInputDataConfig:
    r"""EntityRecognizerInputDataConfig
    Specifies the format and location of the input data.
    """
    
    entity_types: list[shared_entitytypeslistitem.EntityTypesListItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityTypes') }})
    annotations: Optional[shared_entityrecognizerannotations.EntityRecognizerAnnotations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Annotations') }})
    augmented_manifests: Optional[list[shared_augmentedmanifestslistitem.AugmentedManifestsListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AugmentedManifests') }})
    data_format: Optional[shared_entityrecognizerdataformat_enum.EntityRecognizerDataFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormat') }})
    documents: Optional[shared_entityrecognizerdocuments.EntityRecognizerDocuments] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Documents') }})
    entity_list: Optional[shared_entityrecognizerentitylist.EntityRecognizerEntityList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityList') }})
    
