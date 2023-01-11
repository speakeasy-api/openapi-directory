import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parquetconfiguration as shared_parquetconfiguration


@dataclass_json
@dataclasses.dataclass
class FileFormatConfiguration:
    r"""FileFormatConfiguration
    <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href=\"https://parquet.apache.org/\">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
    """
    
    json_configuration: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonConfiguration') }})
    parquet_configuration: Optional[shared_parquetconfiguration.ParquetConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parquetConfiguration') }})
    
