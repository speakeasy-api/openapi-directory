import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reloadoptionvalue_enum as shared_reloadoptionvalue_enum
from ..shared import tabletoreload as shared_tabletoreload


@dataclass_json
@dataclasses.dataclass
class ReloadTablesMessage:
    replication_task_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicationTaskArn') }})
    tables_to_reload: list[shared_tabletoreload.TableToReload] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TablesToReload') }})
    reload_option: Optional[shared_reloadoptionvalue_enum.ReloadOptionValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReloadOption') }})
    
