import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_catalog_deletecustomcolumnlink as shared_links_catalog_deletecustomcolumnlink
from ..shared import links_catalog_getcustomcolumnexpressionlink as shared_links_catalog_getcustomcolumnexpressionlink
from ..shared import links_catalog_changecustomcolumnusernamelink as shared_links_catalog_changecustomcolumnusernamelink
from ..shared import links_catalog_savecustomcolumnlink as shared_links_catalog_savecustomcolumnlink
from ..shared import links_catalog_changecustomcolumnexpressionlink as shared_links_catalog_changecustomcolumnexpressionlink


@dataclass_json
@dataclasses.dataclass
class CustomColumnLinks:
    delete: shared_links_catalog_deletecustomcolumnlink.LinksCatalogDeleteCustomColumnLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    expression: shared_links_catalog_getcustomcolumnexpressionlink.LinksCatalogGetCustomColumnExpressionLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    rename: shared_links_catalog_changecustomcolumnusernamelink.LinksCatalogChangeCustomColumnUserNameLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rename') }})
    save: shared_links_catalog_savecustomcolumnlink.LinksCatalogSaveCustomColumnLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('save') }})
    save_expression: shared_links_catalog_changecustomcolumnexpressionlink.LinksCatalogChangeCustomColumnExpressionLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('saveExpression') }})
    
