import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import botexportspecification as shared_botexportspecification
from ..shared import botlocaleexportspecification as shared_botlocaleexportspecification


@dataclass_json
@dataclasses.dataclass
class ExportResourceSpecification:
    r"""ExportResourceSpecification
    Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
    """
    
    bot_export_specification: Optional[shared_botexportspecification.BotExportSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botExportSpecification') }})
    bot_locale_export_specification: Optional[shared_botlocaleexportspecification.BotLocaleExportSpecification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botLocaleExportSpecification') }})
    
