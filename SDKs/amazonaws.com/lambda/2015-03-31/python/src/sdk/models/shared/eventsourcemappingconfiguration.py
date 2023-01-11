import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationconfig as shared_destinationconfig
from ..shared import functionresponsetype_enum as shared_functionresponsetype_enum
from ..shared import selfmanagedeventsource as shared_selfmanagedeventsource
from ..shared import sourceaccessconfiguration as shared_sourceaccessconfiguration
from ..shared import eventsourceposition_enum as shared_eventsourceposition_enum


@dataclass_json
@dataclasses.dataclass
class EventSourceMappingConfiguration:
    r"""EventSourceMappingConfiguration
    A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>.
    """
    
    batch_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchSize') }})
    bisect_batch_on_function_error: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BisectBatchOnFunctionError') }})
    destination_config: Optional[shared_destinationconfig.DestinationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationConfig') }})
    event_source_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSourceArn') }})
    function_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionArn') }})
    function_response_types: Optional[list[shared_functionresponsetype_enum.FunctionResponseTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionResponseTypes') }})
    last_modified: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_processing_result: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastProcessingResult') }})
    maximum_batching_window_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumBatchingWindowInSeconds') }})
    maximum_record_age_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRecordAgeInSeconds') }})
    maximum_retry_attempts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRetryAttempts') }})
    parallelization_factor: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelizationFactor') }})
    queues: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Queues') }})
    self_managed_event_source: Optional[shared_selfmanagedeventsource.SelfManagedEventSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelfManagedEventSource') }})
    source_access_configurations: Optional[list[shared_sourceaccessconfiguration.SourceAccessConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceAccessConfigurations') }})
    starting_position: Optional[shared_eventsourceposition_enum.EventSourcePositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingPosition') }})
    starting_position_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingPositionTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_transition_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateTransitionReason') }})
    topics: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Topics') }})
    tumbling_window_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TumblingWindowInSeconds') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UUID') }})
    
