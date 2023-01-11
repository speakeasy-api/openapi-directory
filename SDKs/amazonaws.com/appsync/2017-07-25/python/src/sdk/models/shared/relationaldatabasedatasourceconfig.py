import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rdshttpendpointconfig as shared_rdshttpendpointconfig
from ..shared import relationaldatabasesourcetype_enum as shared_relationaldatabasesourcetype_enum


@dataclass_json
@dataclasses.dataclass
class RelationalDatabaseDataSourceConfig:
    r"""RelationalDatabaseDataSourceConfig
    Describes a relational database data source configuration.
    """
    
    rds_http_endpoint_config: Optional[shared_rdshttpendpointconfig.RdsHTTPEndpointConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rdsHttpEndpointConfig') }})
    relational_database_source_type: Optional[shared_relationaldatabasesourcetype_enum.RelationalDatabaseSourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseSourceType') }})
    
