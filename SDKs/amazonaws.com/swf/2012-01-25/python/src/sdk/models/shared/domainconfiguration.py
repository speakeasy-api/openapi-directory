import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DomainConfiguration:
    r"""DomainConfiguration
    Contains the configuration settings of a domain.
    """
    
    workflow_execution_retention_period_in_days: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecutionRetentionPeriodInDays') }})
    
