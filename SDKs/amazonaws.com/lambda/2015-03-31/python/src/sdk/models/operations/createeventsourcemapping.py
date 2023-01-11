import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onfailure as shared_onfailure
from ..shared import onsuccess as shared_onsuccess
from ..shared import functionresponsetype_enum as shared_functionresponsetype_enum
from ..shared import sourceaccessconfiguration as shared_sourceaccessconfiguration
from ..shared import eventsourcemappingconfiguration as shared_eventsourcemappingconfiguration


@dataclasses.dataclass
class CreateEventSourceMappingHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateEventSourceMappingRequestBodyDestinationConfig:
    r"""CreateEventSourceMappingRequestBodyDestinationConfig
    A configuration object that specifies the destination of an event after Lambda processes it.
    """
    
    on_failure: Optional[shared_onfailure.OnFailure] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnFailure') }})
    on_success: Optional[shared_onsuccess.OnSuccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnSuccess') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateEventSourceMappingRequestBodySelfManagedEventSource:
    r"""CreateEventSourceMappingRequestBodySelfManagedEventSource
    The self-managed Apache Kafka cluster for your event source.
    """
    
    endpoints: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoints') }})
    
class CreateEventSourceMappingRequestBodyStartingPositionEnum(str, Enum):
    TRIM_HORIZON = "TRIM_HORIZON"
    LATEST = "LATEST"
    AT_TIMESTAMP = "AT_TIMESTAMP"


@dataclass_json
@dataclasses.dataclass
class CreateEventSourceMappingRequestBody:
    function_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionName') }})
    batch_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchSize') }})
    bisect_batch_on_function_error: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BisectBatchOnFunctionError') }})
    destination_config: Optional[CreateEventSourceMappingRequestBodyDestinationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationConfig') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    event_source_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSourceArn') }})
    function_response_types: Optional[list[shared_functionresponsetype_enum.FunctionResponseTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionResponseTypes') }})
    maximum_batching_window_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumBatchingWindowInSeconds') }})
    maximum_record_age_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRecordAgeInSeconds') }})
    maximum_retry_attempts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRetryAttempts') }})
    parallelization_factor: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelizationFactor') }})
    queues: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Queues') }})
    self_managed_event_source: Optional[CreateEventSourceMappingRequestBodySelfManagedEventSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelfManagedEventSource') }})
    source_access_configurations: Optional[list[shared_sourceaccessconfiguration.SourceAccessConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceAccessConfigurations') }})
    starting_position: Optional[CreateEventSourceMappingRequestBodyStartingPositionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingPosition') }})
    starting_position_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingPositionTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    topics: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Topics') }})
    tumbling_window_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TumblingWindowInSeconds') }})
    

@dataclasses.dataclass
class CreateEventSourceMappingRequest:
    headers: CreateEventSourceMappingHeaders = dataclasses.field()
    request: CreateEventSourceMappingRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateEventSourceMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event_source_mapping_configuration: Optional[shared_eventsourcemappingconfiguration.EventSourceMappingConfiguration] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    resource_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
