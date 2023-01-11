import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datalocationresource as shared_datalocationresource
from ..shared import databaseresource as shared_databaseresource
from ..shared import lftagkeyresource as shared_lftagkeyresource
from ..shared import lftagpolicyresource as shared_lftagpolicyresource
from ..shared import tableresource as shared_tableresource
from ..shared import tablewithcolumnsresource as shared_tablewithcolumnsresource


@dataclass_json
@dataclasses.dataclass
class Resource:
    r"""Resource
    A structure for the resource.
    """
    
    catalog: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Catalog') }})
    data_location: Optional[shared_datalocationresource.DataLocationResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataLocation') }})
    database: Optional[shared_databaseresource.DatabaseResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Database') }})
    lf_tag: Optional[shared_lftagkeyresource.LfTagKeyResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTag') }})
    lf_tag_policy: Optional[shared_lftagpolicyresource.LfTagPolicyResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LFTagPolicy') }})
    table: Optional[shared_tableresource.TableResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Table') }})
    table_with_columns: Optional[shared_tablewithcolumnsresource.TableWithColumnsResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableWithColumns') }})
    
