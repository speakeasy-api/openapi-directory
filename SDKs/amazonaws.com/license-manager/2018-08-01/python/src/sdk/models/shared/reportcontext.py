import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ReportContext:
    r"""ReportContext
    Details of the license configuration that this generator reports on.
    """
    
    license_configuration_arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseConfigurationArns') }})
    
