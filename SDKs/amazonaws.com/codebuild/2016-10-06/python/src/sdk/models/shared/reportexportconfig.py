import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportexportconfigtype_enum as shared_reportexportconfigtype_enum
from ..shared import s3reportexportconfig as shared_s3reportexportconfig


@dataclass_json
@dataclasses.dataclass
class ReportExportConfig:
    r"""ReportExportConfig
     Information about the location where the run of a report is exported. 
    """
    
    export_config_type: Optional[shared_reportexportconfigtype_enum.ReportExportConfigTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportConfigType') }})
    s3_destination: Optional[shared_s3reportexportconfig.S3ReportExportConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Destination') }})
    
