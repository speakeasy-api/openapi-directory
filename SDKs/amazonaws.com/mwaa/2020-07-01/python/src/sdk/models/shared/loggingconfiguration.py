import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import moduleloggingconfiguration as shared_moduleloggingconfiguration


@dataclass_json
@dataclasses.dataclass
class LoggingConfiguration:
    r"""LoggingConfiguration
    Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
    """
    
    dag_processing_logs: Optional[shared_moduleloggingconfiguration.ModuleLoggingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DagProcessingLogs') }})
    scheduler_logs: Optional[shared_moduleloggingconfiguration.ModuleLoggingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchedulerLogs') }})
    task_logs: Optional[shared_moduleloggingconfiguration.ModuleLoggingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskLogs') }})
    webserver_logs: Optional[shared_moduleloggingconfiguration.ModuleLoggingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebserverLogs') }})
    worker_logs: Optional[shared_moduleloggingconfiguration.ModuleLoggingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerLogs') }})
    
