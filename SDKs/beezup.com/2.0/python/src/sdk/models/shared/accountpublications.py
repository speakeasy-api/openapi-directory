import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountpublicationslinks as shared_accountpublicationslinks
from ..shared import publicationreporting as shared_publicationreporting


@dataclass_json
@dataclasses.dataclass
class AccountPublications:
    r"""AccountPublications
    The publication history for an account
    """
    
    links: shared_accountpublicationslinks.AccountPublicationsLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    publications: list[shared_publicationreporting.PublicationReporting] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publications') }})
    
