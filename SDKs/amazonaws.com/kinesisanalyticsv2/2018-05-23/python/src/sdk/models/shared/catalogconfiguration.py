import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gluedatacatalogconfiguration as shared_gluedatacatalogconfiguration


@dataclass_json
@dataclasses.dataclass
class CatalogConfiguration:
    r"""CatalogConfiguration
    The configuration parameters for the default AWS Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
    """
    
    glue_data_catalog_configuration: shared_gluedatacatalogconfiguration.GlueDataCatalogConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlueDataCatalogConfiguration') }})
    
