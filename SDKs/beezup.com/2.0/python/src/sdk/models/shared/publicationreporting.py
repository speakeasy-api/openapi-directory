import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publicationfeedreporting as shared_publicationfeedreporting
from ..shared import publicationtype_enum as shared_publicationtype_enum


@dataclass_json
@dataclasses.dataclass
class PublicationReporting:
    r"""PublicationReporting
    Model for a publication reporting, can have multiple feeds
    """
    
    feeds: list[shared_publicationfeedreporting.PublicationFeedReporting] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feeds') }})
    publication_type: shared_publicationtype_enum.PublicationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicationType') }})
    
