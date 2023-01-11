import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import referencedatasource as shared_referencedatasource


@dataclass_json
@dataclasses.dataclass
class AddApplicationReferenceDataSourceRequest:
    r"""AddApplicationReferenceDataSourceRequest
    <p/>
    """
    
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    current_application_version_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    reference_data_source: shared_referencedatasource.ReferenceDataSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceDataSource') }})
    
