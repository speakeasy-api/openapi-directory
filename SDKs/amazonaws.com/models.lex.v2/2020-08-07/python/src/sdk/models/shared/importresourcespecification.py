import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import botimportspecification as shared_botimportspecification
from ..shared import botlocaleimportspecification as shared_botlocaleimportspecification


@dataclass_json
@dataclasses.dataclass
class ImportResourceSpecification:
    r"""ImportResourceSpecification
    Provides information about the bot or bot locale that you want to import. You can sepcifiy the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
    """
    
    bot_import_specification: Optional[shared_botimportspecification.BotImportSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botImportSpecification') }})
    bot_locale_import_specification: Optional[shared_botlocaleimportspecification.BotLocaleImportSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botLocaleImportSpecification') }})
    
