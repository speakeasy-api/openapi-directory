import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gluedatacatalogconfigurationupdate as shared_gluedatacatalogconfigurationupdate


@dataclass_json
@dataclasses.dataclass
class CatalogConfigurationUpdate:
    r"""CatalogConfigurationUpdate
    Updates to 
    """
    
    glue_data_catalog_configuration_update: shared_gluedatacatalogconfigurationupdate.GlueDataCatalogConfigurationUpdate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlueDataCatalogConfigurationUpdate') }})
    
